import { store } from "../store/index";

export async function mixins(to, from, next) {
    await store.dispatch('FETCH_LIST', to.name);
    next();
}