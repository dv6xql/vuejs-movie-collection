const Movies = resolve => {
    require.ensure(['./components/Movies.vue'], () => {
        resolve(require('./components/Movies.vue'));
    })
};

const MovieDetails = resolve => {
    require.ensure(['./components/MovieDetails.vue'], () => {
        resolve(require('./components/MovieDetails.vue'));
    })
};

const Stats = resolve => {
    require.ensure(['./components/Stats.vue'], () => {
        resolve(require('./components/Stats.vue'));
    })
};

export const routes = [
    {
        path: '/movies',
        component: Movies,
        name: 'movies'
    },
    {
        path: '/movies/:movieId',
        component: MovieDetails,
        name: 'movieDetails'
    },
    {
        path: '/stats',
        component: Stats,
        name: 'stats'
    },
    {
        path: '*',
        redirect: '/movies'
    }
];