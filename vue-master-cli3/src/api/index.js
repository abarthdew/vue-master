import axios from 'axios' // axios -> ../node_modules/axios

// 1. HTTP Request & Response basic settings
const config = {
    baseUrl: 'https://api.hnpwa.com/v0',
}

// 2. API function definition
function fetchNewsList() {
    // return axios.get(config.baseUrl + '/news/1.json');
    return axios.get(`${config.baseUrl}/news/1.json`);
}

function fetchAskList() {
    return axios.get(`${config.baseUrl}/ask/1.json`);
}

function fetchNewestList() {
    return axios.get(`${config.baseUrl}/newest/1.json`);
}

function fetchShowList() {
    return axios.get(`${config.baseUrl}/show/1.json`);
}

function fetchJobList() {
    return axios.get(`${config.baseUrl}/jobs/1.json`);
}

function fetchUserInfo(userName) {
    return axios.get(`${config.baseUrl}/user/${userName}.json`);
}

function fetchCommentItem (itemId) {
    return axios.get(`${config.baseUrl}/item/${itemId}.json`);
}

export {
    fetchNewsList,
    fetchAskList,
    fetchNewestList,
    fetchShowList,
    fetchJobList,
    fetchUserInfo,
    fetchCommentItem,
}