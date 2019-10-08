<template>
    <div>
        <ul>
            <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
            <router-link to="/movies" tag="li" active-class="active"><a>Movies</a></router-link>
            <router-link to="/stats" tag="li" active-class="active"><a>Stats</a></router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>