import Home from './components/Home'
import Stats from "./components/Stats";
import MovieDetails from "./components/MovieDetails";
import Movies from "./components/Movies"

export const routes = [
    {
        path: '',
        component: Home,
        name: 'home'
    },
    {
        path: '/movies',
        component: Movies,
        name: 'movies'
    },
    {
        path: '/movies/:movie_id',
        component: MovieDetails,
        name: 'movieDetails'
    },
    {
        path: '/stats',
        component: Stats,
        name: 'stats'
    }
];