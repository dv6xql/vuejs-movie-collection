<template>
    <div>
        <h1>Movie details {{ movie_id }}</h1>
        <button @click="navigateToHome()">Back to Home</button>
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
            navigateToHome() {
                this.$router.push('/')
            }
        }
    }
</script>

<style scoped>

</style>