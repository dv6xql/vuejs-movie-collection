<template>
    <div>
        <h1>
            Movie details ID: {{ currentMovie.id }} {{ currentMovie.title }}
        </h1>
        <hr>
        <button @click="navigateToMovies()">Back to Movies</button>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import { mapActions } from 'vuex';
    export default {
        name: "MovieDetails",
        data() {
            return {
                movieId: this.$route.params.movieId
            }
        },
        watch: {
            '$route'(to) {
                this.movieId = to.params.movieId;
            }
        },
        methods: {
            ...mapActions([
                'getMovieDetails',
            ]),
            navigateToMovies() {
                this.$router.push({name: 'movies'})
            }
        },
        computed: {
            ...mapGetters([
                'currentMovie'
            ])
        },
        created() {
            this.getMovieDetails(this.movieId);
        }
    }
</script>

<style scoped>

</style>