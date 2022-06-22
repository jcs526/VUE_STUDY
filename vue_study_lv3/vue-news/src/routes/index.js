import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue'
import JobsView from '../views/JobsView.vue'
import AskView from '../views/AskView.vue'
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'
import crateListView from '../views/CreateListView.js'
import { store } from "../store/index.js";
import bus from "../utils/bus"
import {mixins} from '../mixins/ListMixin'
Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news',
    },
    {
      path: '/news',
      component: NewsView,
      name: 'news',
      beforeEnter: (to, from, next) => {
        bus.$emit("start:spinner");
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => bus.$emit("end:spinner"))
          .catch((err) => console.log(err));
      
        next();
      }
    },
  {
    path: '/ask',
    component: AskView,
    name: 'ask',
    beforeEnter: mixins
  },
  {
    path: '/jobs',
    component: JobsView,
    name: 'jobs',
    beforeEnter: mixins
  },
  {
    path: '/item/:id',
    component: ItemView,
  },
  {
    path: '/user/:id',
    component: UserView,
  },

  ]
});