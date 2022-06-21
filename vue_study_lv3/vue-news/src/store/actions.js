
import { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchItem } from "../api/index.js";

export default {
    FETCH_NEWS({ commit }) {
        fetchNewsList()
            .then((response) => { commit('SET_NEWS', response.data); return response; })
            .catch((error) => console.log(error));
    },
    FETCH_JOBS({ commit }) {
        fetchJobsList()
            .then((res) => {
                commit('SET_JOBS', res.data);
            })
            .catch((error) => console.log(error));
    },
    FETCH_ASKS({ commit }) {
        fetchAskList()
            .then((res) =>
                (commit('SET_ASKS', res.data)))
            .catch((err) => console.log(err));
    },
    FETCH_USERINFO({ commit }, userName) {
        fetchUserInfo(userName)
            .then(res => {
                commit('SET_USER', res.data)
            })
            .catch(err => console.log(err))
    },
    FETCH_ITEM({ commit }, id) {
        fetchItem(id)
            .then(res => commit('SET_ITEM', res.data))
            .catch(err => console.log(err))
    }
}
