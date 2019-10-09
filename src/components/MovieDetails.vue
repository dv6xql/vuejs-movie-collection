<template>
    <section>
        <div class="content">
            <header>
                <h1>{{ currentMovie.title }}</h1>
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
            <ul class="actions">
                <li><a href="#" class="button big" @click="navigateToMovies()">Back to Movies</a></li>
            </ul>
        </div>
    </section>
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