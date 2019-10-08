import Home from './components/Home'
import Stats from "./components/Stats";

export const routes = [
    {
        path: '',
        component: Home
    },
    {
        path: '/stats',
        component: Stats
    }
];