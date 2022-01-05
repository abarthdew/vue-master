import Vue from 'vue';
import VueRouter from 'vue-router'; // get router
import NewsView from '../views/NewsView';
import AskView from '../views/AskView';
import JobsView from '../views/JobsView';
import UserView from '../views/UserView';
import ItemView from '../views/ItemView';

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
            component: NewsView, // displayed component for url; aka 'page'
        },
        {
            path: '/ask', // If you go to '/ask',
            component: AskView, // You can see this page
        },
        {
            path: '/jobs',
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