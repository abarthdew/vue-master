import axios from 'axios' // axios -> ../node_modules/axios

// 1. HTTP Request & Response basic settings
const config = {
    baseUrl: 'https://api.hnpwa.com/v0',
}

// 2. API function definition
function fetchList(name) {
    return axios.get(`${config.baseUrl}/${name}/1.json`); // = return new Promise();
}

function fetchNewestList() {
    return axios.get(`${config.baseUrl}/newest/1.json`);
}

function fetchShowList() {
    return axios.get(`${config.baseUrl}/show/1.json`);
}

function fetchUserInfo(userName) {
    return axios.get(`${config.baseUrl}/user/${userName}.json`);
}

function fetchCommentItem (itemId) {
    return axios.get(`${config.baseUrl}/item/${itemId}.json`);
}

export {
    fetchList,
    fetchNewestList,
    fetchShowList,
    fetchUserInfo,
    fetchCommentItem,
}