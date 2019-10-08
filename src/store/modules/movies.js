import axios from 'axios';

const state = {
    movies: [],
    currentMovie: [],
    apiKey: 'f5113d82bf25e774efd85825b36c9f09'
};

const getters = {
    movies: state => {
        return state.movies;
    },
    currentMovie: state => {
        return state.currentMovie;
    }
};

const mutations = {
    storeMovies: (state, movies) => {
        state.movies = movies;
    },
    storeCurrentMovie: (state, currentMovie) => {
        state.currentMovie = currentMovie;
    }
};

const actions = {
    getMovies: ({ state, commit }) => {
        axios.get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${state.apiKey}`)
            .then(response => {
                commit('storeMovies', response.data.results);
            });
    },
    getMovieDetails: ({ state, commit }, movieId) => {
        state.currentMovie = [];
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${state.apiKey}`)
            .then(response => {
                commit('storeCurrentMovie', response.data);
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