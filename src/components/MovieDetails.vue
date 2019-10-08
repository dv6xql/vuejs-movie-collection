<template>
    <div>
        <h1>Movie details ID: {{ movie.id }} {{ movie.title }}</h1>
        <hr>
        <button @click="navigateToMovies()">Back to Movies</button>
    </div>
</template>

<script>
    export default {
        name: "MovieDetails",
        data() {
            return {
                movie: this.$route.params.movie
            }
        },
        watch: {
            '$route'(to) {
                this.movie = to.params.movie.id;
            }
        },
        methods: {
            navigateToMovies() {
                this.$router.push({name: 'movies'})
            }
        }
    }
</script>

<style scoped>

</style>