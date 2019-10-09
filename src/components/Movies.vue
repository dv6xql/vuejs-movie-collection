<template>
    <div>
        <h1>Movies</h1>
        <select v-model="sortBy" @change="getMovies(sortBy)">
            <option :value="key" v-for="(option, key) in sortByOptions">{{ option }}</option>
        </select>
        <ul>
            <li v-for="movie in movies" :key="`movie-${movie.id}`">
                <router-link :to="{name: 'movieDetails', params: {movieId: movie.id}}" tag="li" active-class="active" exact><a>{{ movie.title }}</a></router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import { mapActions } from 'vuex';
    export default {
        name: "Movies",
        data() {
            return {
                sortBy: 'popularity.desc'
            }
        },
        methods: {
            ...mapActions([
                'getMovies',
                'storeMovies'
            ])
        },
        computed: {
            ...mapGetters([
                'movies',
                'sortByOptions'
            ])
        },
        created() {
            this.getMovies();
        }
    }
</script>

<style scoped>

</style>