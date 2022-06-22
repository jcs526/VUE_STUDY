
import { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchItem, fetchList } from "../api/index.js";

export default {
    // promise 
    FETCH_NEWS({ commit }) {
        return fetchNewsList()
            .then((response) => { commit('SET_NEWS', response.data); return response; })
            .catch((error) => console.log(error));
    },

    // asyncd
    async FETCH_JOBS({ commit }) {
        const response = await fetchJobsList();
        commit('SET_JOBS', response.data);
        return response;
    },
    FETCH_ASKS({ commit }) {
        return fetchAskList()
            .then((res) =>
                (commit('SET_ASKS', res.data)))
            .catch((err) => console.log(err));
    },
    FETCH_USERINFO({ commit }, userName) {
        return fetchUserInfo(userName)
            .then(res => {
                commit('SET_USER', res.data)
            })
            .catch(err => console.log(err))
    },
    FETCH_ITEM({ commit }, id) {
        return fetchItem(id)
            .then(res => commit('SET_ITEM', res.data))
            .catch(err => console.log(err))
    },
    //promise
    // FETCH_LIST({commit}, name){
    //     return fetchList(name)
    //     .then(res=>commit('SET_LIST',res.data))
    //     .catch(err=>console.log(err))
    // }
    //async
    async FETCH_LIST({ commit }, name) {
        try {
            const response = await fetchList(name);
            commit('SET_LIST', response.data);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}
