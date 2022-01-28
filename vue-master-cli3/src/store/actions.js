import { fetchList, fetchUserInfo, fetchCommentItem } from '../api/index.js'

export default {
    FETCH_LIST({ commit }, name) {
        fetchList(name)
            .then(res => { // get data
                commit('SET_LIST', res.data); // send mutation
                return res; // return response(send Promise object to View Page - in this case, NewsView.vue)
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
    },
}