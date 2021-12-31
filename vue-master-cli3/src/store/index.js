import Vue from 'vue'
import Vuex from 'vuex'
import { fetchNewsList } from '../api/index.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news: [],
    },
    mutations: {
        SET_NEWS(state, news) {
            state.news = news; // (2) called context.commit('SET_NEWS')
        }
    },
    actions: {
        FETCH_NEWS(context) {
            fetchNewsList()
            .then(res => {
                // state.news = res.data; => error! You can't bind state.news directly.
                context.commit('SET_NEWS', res.data); // => (1) You can put res.data like this.
            })
            .catch(err => console.log(err));
        }
    }
})