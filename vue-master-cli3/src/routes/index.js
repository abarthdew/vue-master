import Vue from 'vue';
import VueRouter from 'vue-router'; // get router
import UserView from '../views/UserView';
import ItemView from '../views/ItemView';
import NewsView from '../views/NewsView';
import JobsView from '../views/JobsView';
import AskView from '../views/AskView';
import bus from '../utils/bus';
import { store } from '../store/index';

Vue.use(VueRouter); // vue router setting

export const router = new VueRouter({ // make new router Object
    mode: 'history',
    routes: [ // set router information inside Object
        {
            path: '/',
            redirect: '/news' // Go to NewsView directly
        },
        {
            path: '/news', 
            name: 'news',
            component: NewsView, 
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        bus.$emit('end:spinner');
                        next(); // when data binding has done, go to.name(router you may go)
                    })
                    .catch(err => console.log(err));
                /* ex)
                if (to.auth) {
                    next();
                } else {
                    router.replace('/login'); or router.push('/');
                }
                */
            } 
        },
        {
            path: '/ask',
            name: 'ask',
            component: AskView,
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        next();
                    })
                    .catch(err => console.log(err));
            } 
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        next();
                    })
                    .catch(err => console.log(err));
            } 
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