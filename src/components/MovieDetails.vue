<template>
    <section>
        <div class="content">
            <header>
                <h1>
                    {{ currentMovie.title }}
                    <div class="rating">
                        <span @click="setRate(5)" :class="{'active': userRating >= 5}">☆</span>
                        <span @click="setRate(4)" :class="{'active': userRating >= 4}">☆</span>
                        <span @click="setRate(3)" :class="{'active': userRating >= 3}">☆</span>
                        <span @click="setRate(2)" :class="{'active': userRating >= 2}">☆</span>
                        <span @click="setRate(1)" :class="{'active': userRating >= 1}">☆</span>
                    </div>
                </h1>
                <div class="box alt image-container" v-if="currentMovie.poster_path">
                    <div class="image fit">
                        <img :src="currentMovie.poster_path ? `https://image.tmdb.org/t/p/original/${currentMovie.poster_path}` : '/no-image.png'" :alt="currentMovie.title" />
                    </div>
                </div>
                <p>{{ currentMovie.overview }}</p>
            </header>
            <div class="title">
                <h2>Details</h2>
            </div>
            <div class="box">
                <ul class="alt">
                    <li><strong>Original Title:</strong> {{ currentMovie.original_title }}</li>
                    <li><strong>Release Date:</strong> {{ currentMovie.release_date }}</li>
                    <li><strong>Language:</strong> <span v-for="language in currentMovie.spoken_languages" :key="`language-${language.name}`"> {{ language.name }} </span></li>
                    <li><strong>Genres:</strong> <span v-for="genre in currentMovie.genres" :key="`genre-${genre.name}`"> {{ genre.name }} </span></li>
                    <li><strong>Runtime:</strong> {{ currentMovie.runtime }} minutes</li>
                    <li><strong>Status:</strong> {{ currentMovie.status }}</li>
                </ul>
            </div>
            <div class="title" v-if="Object.keys(similarMovies).length">
                <h2>Similar movies</h2>
            </div>
            <div class="items" v-if="Object.keys(similarMovies).length">
                <article v-for="movie in similarMovies" :key="`movie-${movie.id}`">
                    <router-link :to="{name: 'movieDetails', params: {movieId: movie.id}}">
                        <a href="#" class="image">
                            <img :src="movie.poster_path ? `https://image.tmdb.org/t/p/original/${movie.poster_path}` : '/no-image.png'" :alt="movie.title" />
                        </a>
                    </router-link>
                    <h3>{{ movie.title }}</h3>
                    <p>{{ movie.overview }}</p>
                    <ul class="actions">
                        <router-link :to="{name: 'movieDetails', params: {movieId: movie.id}}" tag="li" exact><a class="button">Details</a></router-link>
                    </ul>
                </article>
            </div>
        </div>
    </section>
</template>

<script>
    import { mapGetters } from 'vuex';
    import { mapActions } from 'vuex';
    import axios from 'axios';
    export default {
        name: "MovieDetails",
        data() {
            return {
                movieId: this.$route.params.movieId,
                similarMovies: [],
                userRating: 0
            }
        },
        watch: {
            '$route'(to) {
                this.movieId = to.params.movieId;
                this.getMovieDetails(this.movieId);
                this.getRate();
            },
            currentMovie() {
                this.getSimilarMovies();
                this.getRate();
            },
        },
        methods: {
            ...mapActions([
                'getMovieDetails',
            ]),
            getSimilarMovies() {
                if (!Object.keys(this.currentMovie).length) {
                    return false;
                }

                let genre = this.currentMovie.genres[0].id;

                axios.get(`https://api.themoviedb.org/3/discover/movie?with_genres=${genre}&api_key=${this.apiKey}`)
                    .then(response => {
                        this.similarMovies = Object.entries(response.data.results)
                            .slice(0, 5)
                            .map(movie => movie[1])
                            .filter((movie) => {
                                return movie.id != this.currentMovie.id
                            });
                    });
            },
            setRate(userRating) {
                this.userRating = userRating;
                localStorage.setItem(`movie_${this.currentMovie.id}_rate`, userRating);
            },
            getRate() {
                this.userRating = localStorage.getItem(`movie_${this.currentMovie.id}_rate`);
            }
        },
        computed: {
            ...mapGetters([
                'currentMovie',
                'apiKey'
            ])
        },
        created() {
            this.getMovieDetails(this.movieId);
        }
    }
</script>

<style scoped>

</style>