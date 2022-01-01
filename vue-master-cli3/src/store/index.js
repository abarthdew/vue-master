import Vue from 'vue'
import Vuex from 'vuex'
import { fetchNewsList, fetchJobList, fetchAskList } from '../api/index.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news: [],
        jobs: [],
        asks: [],
    },
    getters: {
        getNews(state) {
            return state.news;
        },
        getJobs(state) {
            return state.jobs;
        },
        getAsks(state) {
            return state.asks;
        }
    },
    mutations: {
        SET_NEWS(state, news) {
            state.news = news; // (2) called context.commit('SET_NEWS')
        },
        SET_JOBS(state, jobs) {
            state.jobs = jobs;
        },
        SET_ASKS(state, asks) {
            state.asks = asks;
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
        },
        FETCH_JOBS({ commit }) {
            fetchJobList()
            .then(({ data }) => {
                commit('SET_JOBS', data);
            })
            .catch(err => console.log(err));
        },
        FETCH_ASKS(context) {
            fetchAskList()
            .then(res => {
                context.commit('SET_ASKS', res.data);
            })
            .catch(err => console.log(err));
        }
    }
})