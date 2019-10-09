<template>
    <section>
        <div class="content">
            <header>
                <h1>{{ currentMovie.title }}</h1>
                <div class="box alt" v-if="currentMovie.poster_path">
                    <div class="row gtr-50 gtr-uniform">
                        <div class="col-2"><span class="image fit"><img :src="currentMovie.poster_path ? `https://image.tmdb.org/t/p/original/${currentMovie.poster_path}` : '/no-image.png'" :alt="currentMovie.title" /></span></div>
                    </div>
                </div>
                <p>{{ currentMovie.overview }}</p>
            </header>
            <header class="title">
                <h2>Details</h2>
            </header>
            <div class="box">
                <ul class="alt">
                    <li><strong>Original Title:</strong> {{ currentMovie.original_title }}</li>
                    <li><strong>Release Date:</strong> {{ currentMovie.release_date }}</li>
                    <li><strong>Language:</strong> <span v-for="language in currentMovie.spoken_languages"> {{ language.name }} </span></li>
                    <li><strong>Genres:</strong> <span v-for="genre in currentMovie.genres"> {{ genre.name }} </span></li>
                    <li><strong>Runtime:</strong> {{ currentMovie.runtime }} minutes</li>
                    <li><strong>Status:</strong> {{ currentMovie.status }}</li>
                </ul>
            </div>
            <header class="title" v-if="Object.keys(similarMovies).length">
                <h2>Similar movies</h2>
            </header>
            <div class="movies" v-if="Object.keys(similarMovies).length">
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
                similarMovies: []
            }
        },
        watch: {
            '$route'(to) {
                this.movieId = to.params.movieId;
                this.getMovieDetails(this.movieId);
            },
            currentMovie() {
                this.getSimilarMovies();
            }
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