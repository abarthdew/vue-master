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

export {
    fetchNewsList
}