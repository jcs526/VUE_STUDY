import bus from "../utils/bus";
import { store } from "../store/index";


export const mixins = async (to, from, next) => {
    bus.$emit('start');
    await store.dispatch('FETCH_LIST', to.name);
    next();
}