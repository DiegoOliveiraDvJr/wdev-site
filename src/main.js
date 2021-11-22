import { createApp } from 'vue';
import App from './App.vue';

import VueRouter from 'vue-router';

import Home from '@/pages/Home';


const routes = [
    {
         path: '/',
         component: Home
    }
];

const router = new VueRouter({
    routes,
    mode: 'history'
})

createApp(App).use(router).mount('#app')

