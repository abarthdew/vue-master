import { fetchList, fetchUserInfo, fetchCommentItem } from '../api/index.js'

export default {
    // promise
    FETCH_LIST2({ commit }, name) {
        return fetchList(name)
            .then(res => {
                commit('SET_LIST', res.data); 
                return res; 
            })
            .catch(err => console.log(err));
    },
    // async
    async FETCH_LIST({ commit }, name) {
        const response = await fetchList(name);
        commit('SET_LIST', response.data);
        return response;
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