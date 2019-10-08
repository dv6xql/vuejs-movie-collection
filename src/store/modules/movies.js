const state = {
    movies: []
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