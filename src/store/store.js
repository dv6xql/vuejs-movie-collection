import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        movies: []
    },
    getters: {
        movies: state => {
            return state.movies;
        }
    }
});