<template>
    <div id="app">
        <div id="wrapper">
            <div id="main">
                <div class="inner">
                    <app-header></app-header>
                    <transition name="slide-fade" mode="out-in">
                        <router-view></router-view>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "./components/Header";

    export default {
        name: 'app',
        components: {
            appHeader : Header,
        }
    }
</script>

<style>
    .slide-fade-enter-active {
        transition: all .2s ease;
    }
    .slide-fade-leave-active {
        transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to {
        transform: translateX(10px);
        opacity: 0;
    }
</style>
