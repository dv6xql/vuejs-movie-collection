<template>
    <div>
        <h1>Movie details ID: {{ movie_id }}</h1>
        <hr>
        <button @click="navigateToMovies()">Back to Movies</button>
    </div>
</template>

<script>
    export default {
        name: "MovieDetails",
        data() {
            return {
                movie_id: this.$route.params.movie_id
            }
        },
        watch: {
            '$route'(to) {
                this.movie_id = to.params.id;
            }
        },
        methods: {
            navigateToMovies() {
                this.$router.push('/movies')
            }
        }
    }
</script>

<style scoped>

</style>