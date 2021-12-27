import Vue from 'vue';
import VueRouter from 'vue-router'; // get router

Vue.use(vueRouter); // vue router setting

const router = new VueRouter({ // make new router Object
    routes: [ // set router information inside Object
        {
            path: '/', // url address
            component: '', // displayed component for url; aka 'page'
        },
        {
            path: '',
            component: '',
        },
        {
            path: '',
            component: '',
        }
    ],
})