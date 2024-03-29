import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user: {},
    item: {},
    list: [],
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
    },
    fetchedItem(state) {
      return state.item;
    }
  },
  mutations: mutations, // You can write code like this,
  actions, // Or you can write code like this just one.
})