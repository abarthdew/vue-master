import axios from 'axios' // axios -> ../node_modules/axios

// 1. HTTP Request & Response basic settings
const config = {
  baseUrl: 'https://api.hnpwa.com/v0',
}

// 2. API function definition
async function fetchList(name) {
  try { // error handling
    const response = await axios.get(`${config.baseUrl}/${name}/1.json`);
    return response;
  } catch (error) {
    console.log(error);
  }
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

function fetchCommentItem(itemId) {
  return axios.get(`${config.baseUrl}/item/${itemId}.json`);
}

export {
  fetchList,
  fetchNewestList,
  fetchShowList,
  fetchUserInfo,
  fetchCommentItem,
}