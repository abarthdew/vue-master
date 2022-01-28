import Vue from 'vue';
import VueRouter from 'vue-router'; // get router
import UserView from '../views/UserView';
import ItemView from '../views/ItemView';
import NewsView from '../views/NewsView';
import JobsView from '../views/JobsView';
import AskView from '../views/AskView';

Vue.use(VueRouter); // vue router setting

export const router = new VueRouter({ // make new router Object
    mode: 'history',
    routes: [ // set router information inside Object
        {
            path: '/',
            redirect: '/news' // Go to NewsView directly
        },
        {
            path: '/news', // url address
            name: 'news',
            component: NewsView, // high order component
        },
        {
            path: '/ask', // If you go to '/ask',
            name: 'asks',
            component: AskView,
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
        },
        {
            path: '/user/:id',
            component: UserView,
        },
        {
            path: '/item/:id',
            component: ItemView,
        }
    ],
});