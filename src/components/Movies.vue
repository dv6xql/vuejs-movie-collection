<template>
    <section>
        <header class="title">
            <h2>Movies</h2>
        </header>
        <div class="movies">
            <select v-model="sortBy" @change="getMovies(sortBy)">
                <option :value="key" v-for="(option, key) in sortByOptions">{{ option }}</option>
            </select>
            <input type="text" v-model="search" @keyup.enter="searchMovies(search)">
            <ul>
                <li v-for="movie in foundMovies" :key="`found-movie-${movie.id}`">
                    <router-link :to="{name: 'movieDetails', params: {movieId: movie.id}}" tag="li" active-class="active" exact><a>{{ movie.title }}</a></router-link>
                </li>
            </ul>
        </div>
        <div class="movies">
            <article v-for="movie in movies" :key="`movie-${movie.id}`">
                <router-link :to="{name: 'movieDetails', params: {movieId: movie.id}}">
                    <a href="#" class="image">
                        <img :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" :alt="movie.title" />
                    </a>
                </router-link>
                <h3>{{ movie.title }}</h3>
                <p>{{ movie.overview }}</p>
                <ul class="actions">
                    <router-link :to="{name: 'movieDetails', params: {movieId: movie.id}}" tag="li" exact><a class="button">Details</a></router-link>
                </ul>
            </article>
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
                'foundMovies'
            ])
        },
        created() {
            this.getMovies();
        }
    }
</script>

<style scoped>

</style>