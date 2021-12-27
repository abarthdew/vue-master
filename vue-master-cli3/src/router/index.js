import Vue from 'vue';
import VueRouter from 'vue-router'; // get router
import NewsView from '../views/NewsView';
import AskView from '../views/AskView';
import JobsView from '../views/JobsView';

Vue.use(vueRouter); // vue router setting

const router = new VueRouter({ // make new router Object
    routes: [ // set router information inside Object
        {
            path: '/news', // url address
            component: NewsView, // displayed component for url; aka 'page'
        },
        {
            path: '/ask', // If you go to '/ask',
            component: AskView, // You can see this page
        },
        {
            path: '.jobs',
            component: JobsView,
        }
    ],
})