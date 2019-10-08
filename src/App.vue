<template>
    <div id="app">
        <app-header></app-header>
        <router-view></router-view>
        <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
</template>

<script>
    import Header from "./components/Header";
    import HelloWorld from './components/HelloWorld.vue'

    export default {
        name: 'app',
        components: {
            appHeader : Header,
            HelloWorld
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
