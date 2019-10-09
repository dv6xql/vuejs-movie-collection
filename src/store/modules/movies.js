import axios from 'axios';

const state = {
    movies: [],
    currentMovie: [],
    apiKey: 'f5113d82bf25e774efd85825b36c9f09',
    foundMovies: [],
    sortByOptions: {
        'popularity.desc': 'Most Popular Movies DESC',
        'popularity.asc': 'Most Popular Movies ASC',
        'vote_average.desc': 'Highest Rated DESC',
        'vote_average.asc': 'Highest Rated ASC',
        'revenue.desc': 'Highest Grossing DESC',
        'revenue.asc': 'Highest Grossing ASC'
    }
};

const getters = {
    movies: state => {
        return state.movies;
    },
    currentMovie: state => {
        return state.currentMovie;
    },
    foundMovies: state => {
        return state.foundMovies;
    },
    sortByOptions: state => {
        return state.sortByOptions;
    }
};

const mutations = {
    storeMovies: (state, movies) => {
        state.movies = movies;
    },
    storeCurrentMovie: (state, currentMovie) => {
        state.currentMovie = currentMovie;
    },
    storeFoundMovies: (state, foundMovies) => {
        state.foundMovies = foundMovies;
    }
};

const actions = {
    getMovies: ({state, commit}, sortBy = null) => {
        if (!sortBy) {
            sortBy = 'popularity.desc';
        }

        axios.get(`https://api.themoviedb.org/3/discover/movie?sort_by=${sortBy}&api_key=${state.apiKey}`)
            .then(response => {
                commit('storeMovies', response.data.results);
            });
    },
    getMovieDetails: ({state, commit}, movieId) => {
        state.currentMovie = [];
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${state.apiKey}`)
            .then(response => {
                commit('storeCurrentMovie', response.data);
            });
    },
    storeMovies: ({commit}, movies) => {
        commit('storeMovies', movies);
    },
    searchMovies: ({state, commit}, query) => {
        state.foundMovies = [];
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${state.apiKey}&query=${query}`)
            .then(response => {
                commit('storeFoundMovies', response.data.results);
            });
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}