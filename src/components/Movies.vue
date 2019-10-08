<template>
    <div>
        <h1>Movies</h1>
        <ul>
            <li v-for="movie_id in Array.from(Array(10).keys()).map(i => i + 1)" :key="`movie-${movie_id}`">
                <router-link :to="{name: 'movieDetails', params: {movie_id: movie_id}}" tag="li" active-class="active" exact><a>Movie with id {{ movie_id }}</a></router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import { mapActions } from 'vuex';
    export default {
        name: "Movies",
        methods: {
            ...mapActions([
                'getMovies',
                'storeMovies'
            ])
        },
        computed: {
            ...mapGetters([
                'movies'
            ])
        },
        created() {
            this.getMovies();
        }
    }
</script>

<style scoped>

</style>