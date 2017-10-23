import Home from './components/Home.vue';
import Registrar from './components/Registrar.vue';

export const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/registrar',
        name: 'registrar',
        component: Registrar
    }
];
