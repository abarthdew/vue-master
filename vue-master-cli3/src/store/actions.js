import { fetchList, fetchUserInfo, fetchCommentItem } from '../api/index.js'

export default {
    // #2
    FETCH_LIST({ commit }, name) {
        // #3
        console.log(3);
        return fetchList(name)
        // #4
            .then(res => {
                console.log(4);
                commit('SET_LIST', res.data); 
                return res; 
            })
            .catch(err => console.log(err));
    },
    FETCH_USER(context) {
        return fetchUserInfo()
        .then(res => {
            context.commit('SET_USER', res.data);
        })
        .catch(err => console.log(err));
    },
    FETCH_ITEM({ commit }, id) {
        return fetchCommentItem(id)
        .then(({ data }) => {
            commit('SET_ITEM', data);
        })
        .catch(err => console.log(err));
    },
}