import axios from 'axios';

// axios.defaults.baseURL='https://api.hnpwa.com/v0/';
let instance = axios.create({
    baseURL:'https://api.hnpwa.com/v0/'
})
// 1.HTTP Rquest & Response와 관련된 기본설정
const config ={
    news : 'news/1.json',
    jobs : 'jobs/1.json',
    ask : 'ask/1.json'
}

// 2. API 함수들을 정리
function fetchNewsList(){
    return instance.get(`${config.news}`);
}
function fetchJobsList(){
    return instance.get(`${config.jobs}`);
}
function fetchAskList(){
    return instance.get(`${config.ask}`);
}


export {fetchNewsList,fetchJobsList,fetchAskList};