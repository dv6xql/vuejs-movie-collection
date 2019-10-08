<template>
    <div>
        <h1>Home</h1>
        <ul>
            <li v-for="movie_id in Array.from(Array(10).keys()).map(i => i)" :key="`movie-${movie_id}`">
                <router-link :to="`/movie/${movie_id}/details`" tag="li" active-class="active" exact><a>Movie with id {{ movie_id }}</a></router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>

</style>