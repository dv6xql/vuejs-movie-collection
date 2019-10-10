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
        name: 'movies',
        meta: {
            title: 'Movies',
        },
    },
    {
        path: '/movies/:movieId',
        component: MovieDetails,
        name: 'movieDetails',
        meta: {
            title: 'Movie Details',
        },
    },
    {
        path: '/stats',
        component: Stats,
        name: 'stats',
        meta: {
            title: 'Stats',
        },
    },
    {
        path: '*',
        redirect: '/movies',
    }
];