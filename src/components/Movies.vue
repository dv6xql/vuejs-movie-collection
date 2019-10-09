<template>
    <section>
        <header class="title">
            <h2>Movies</h2>
            <select v-model="sortBy" @change="getMovies({'sortBy': sortBy, 'page': 1})">
                <option :value="key" v-for="(option, key) in sortByOptions">{{ option }}</option>
            </select>
        </header>
        <div class="content">
            <input type="text" v-model="search" @keyup.enter="searchMovies(search)" placeholder="What are you looking for?">
            <ul>
                <li v-for="movie in foundMovies" :key="`found-movie-${movie.id}`">
                    <router-link :to="{name: 'movieDetails', params: {movieId: movie.id}}" tag="li" active-class="active" exact><a>{{ movie.title }}</a></router-link>
                </li>
            </ul>
        </div>
        <div class="movies">
            <article v-for="movie in movies.results" :key="`movie-${movie.id}`">
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
        <div class="content">
            <ul class="pagination">
                <li>
                    <button class="button" :class="{'disabled': currentPage <= 1}" @click.prevent="getMovies({'sortBy': sortBy, 'page': currentPage - 1})" :disabled="currentPage <= 1">Previous</button>
                </li>
                <li v-for="page in pages">
                    <a href="#" class="page" :class="{'active': page === currentPage}" @click.prevent="getMovies({'sortBy': sortBy, 'page': page})">{{ page }}</a>
                </li>
                <li>
                    <button class="button" :class="{'disabled': currentPage + 1 >= totalPages}" @click.prevent="getMovies({'sortBy': sortBy, 'page': currentPage + 1})" :disabled="currentPage + 1 >= totalPages">Next</button>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
    import { mapGetters } from 'vuex';
    import { mapActions } from 'vuex';
    export default {
        name: "Movies",
        data() {
            return {
                sortBy: 'popularity.desc',
                search: ''
            }
        },
        methods: {
            ...mapActions([
                'getMovies',
                'storeMovies',
                'searchMovies'
            ])
        },
        computed: {
            ...mapGetters([
                'movies',
                'sortByOptions',
                'foundMovies',
                'currentPage',
                'totalPages'
            ]),
            pages() {
                let array = Array.from(Array(this.totalPages).keys()).map(i => i + 1);
                let currentIndex = array.findIndex((item) => {
                    return item === this.currentPage;
                });
                if (currentIndex < 3) {
                    currentIndex = 0;
                } else {
                    currentIndex -= 2;
                }

                return array.slice(currentIndex, currentIndex + 6);
            }
        },
        created() {
            this.getMovies({'sortBy': this.sortBy});
        }
    }
</script>

<style scoped>

</style>