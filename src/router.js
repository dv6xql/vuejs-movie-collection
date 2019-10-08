import Home from './components/Home'
import Stats from "./components/Stats";
import MovieDetails from "./components/MovieDetails";

export const routes = [
    {
        path: '',
        component: Home
    },
    {
        path: '/movie/:movie_id/details',
        component: MovieDetails
    },
    {
        path: '/stats',
        component: Stats
    }
];