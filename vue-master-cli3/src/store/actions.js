import { fetchNewsList, fetchJobList, fetchAskList, fetchUserInfo, fetchCommentItem } from '../api/index.js'

export default {
    FETCH_NEWS(context) {
        fetchNewsList()
            .then(res => { // get data
                context.commit('SET_NEWS', res.data); // send mutation
                return res; // return response(send Promise object to View Page - in this case, NewsView.vue)
            })
            .catch(err => console.log(err));
    },
    FETCH_JOBS({ commit }) {
        fetchJobList()
            .then(({ data }) => {
                commit('SET_JOBS', data);
                return res;
            })
            .catch(err => console.log(err));
    },
    FETCH_ASKS(context) {
        fetchAskList()
            .then(res => {
                context.commit('SET_ASKS', res.data);
                return res;
            })
            .catch(err => console.log(err));
    },
    FETCH_USER(context) {
        fetchUserInfo()
        .then(res => {
            context.commit('SET_USER', res.data);
        })
        .catch(err => console.log(err));
    },
    FETCH_ITEM({ commit }, id) {
        fetchCommentItem(id)
        .then(({ data }) => {
            commit('SET_ITEM', data);
        })
        .catch(err => console.log(err));
    }
}