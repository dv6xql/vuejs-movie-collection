<template>
    <div>
        <h1>Movie details ID: {{ movieId }}</h1>
        <hr>
        <button @click="navigateToMovies()">Back to Movies</button>
    </div>
</template>

<script>
    export default {
        name: "MovieDetails",
        data() {
            return {
                movieId: this.$route.params.movieId
            }
        },
        watch: {
            '$route'(to) {
                this.movieId = to.params.movieId
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