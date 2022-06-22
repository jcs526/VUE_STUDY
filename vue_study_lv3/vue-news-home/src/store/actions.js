
import { fetchNewsList, fetchAskList, fetchJobsList, fetchUser, fetchItem, fetchList } from "../api/index.js";

export default {
    FETCH_NEWS(context) {
        fetchNewsList()
            .then((response) => (context.commit('SET_NEWS', response.data)))
            .catch((error) => console.log(error));
    },

    FETCH_JOBS(context) {
        fetchJobsList()
            .then(res =>
                context.commit('SET_JOBS', res.data))
            .catch(err =>
                console.log(err))
    },

    FETCH_ASKS(context) {
        fetchAskList()
            .then((res) =>
                context.commit('SET_ASKS', res.data))
            .catch((err) => console.log(err));
    },

    FETCH_USER({ commit }, data) {
        console.log(data)
        fetchUser(data)
            .then(res =>
                commit('SET_USER', res.data))
            .catch((err) => console.log(err));
    },

    FETCH_ITEM({ commit }, path) {
        console.log(path)
        fetchItem(path)
            .then(res =>
                commit('SET_ITEM', res.data))
            .catch((err) => console.log(err));
    },

    async FETCH_LIST({ commit }, pageName) {
        try {
            const response = await fetchList(pageName);
            commit('SET_LIST', response.data);
            return response;
        } catch (error) {
            console.log(error);
        }

    }
}