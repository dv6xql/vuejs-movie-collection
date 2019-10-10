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
    import AppHeader from "./components/AppHeader";

    export default {
        name: 'app',
        components: {
            appHeader: AppHeader,
        }
    }
</script>

<style scoped>
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
