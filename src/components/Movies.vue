<template>
    <div>
        <h1>Movies</h1>
        <ul>
            <li v-for="movie in movies" :key="`movie-${movie.id}`">
                <router-link :to="{name: 'movieDetails', params: {movieId: movie.id, movie: movie}}" tag="li" active-class="active" exact><a>{{ movie.title }}</a></router-link>
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