import axios from 'axios';

const state = {
    movies: [],
    apiKey: 'f5113d82bf25e774efd85825b36c9f09'
};

const getters = {
    movies: state => {
        return state.movies;
    }
};

const mutations = {
    storeMovies: (state, movies) => {
        state.movies = movies;
    }
};

const actions = {
    getMovies: ({ state, commit }) => {
        axios.get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${state.apiKey}`)
            .then(response => {
                commit('storeMovies', response.data.results);
            });
    },
    storeMovies: ({ commit }, movies) => {
        commit('storeMovies', movies);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}