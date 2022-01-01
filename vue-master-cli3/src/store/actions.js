import { fetchNewsList, fetchJobList, fetchAskList } from '../api/index.js'

export default {
    FETCH_NEWS(context) {
        fetchNewsList()
            .then(res => {
                context.commit('SET_NEWS', res.data); 
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