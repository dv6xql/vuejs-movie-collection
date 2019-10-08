import Home from './components/Home'
import Stats from "./components/Stats";
import MovieDetails from "./components/MovieDetails";
import Movies from "./components/Movies"

export const routes = [
    {
        path: '',
        component: Home
    },
    {
        path: '/movies',
        component: Movies,
    },
    {
        path: '/movies/:movie_id',
        component: MovieDetails
    },
    {
        path: '/stats',
        component: Stats
    }
];