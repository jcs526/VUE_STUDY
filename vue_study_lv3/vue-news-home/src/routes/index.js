import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue'
import JobsView from '../views/JobsView.vue'
import AskView from '../views/AskView.vue'
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'
import createListView from '../views/createListView';
import {mixins} from '../mixins/mixins'

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
      name: 'news',
      component: createListView('news'),
      beforeEnter: mixins,
    },
    {
      path: '/ask',
      name: 'ask',
      component: createListView('ask'),
      beforeEnter: mixins,
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: createListView('jobs'),
      beforeEnter: mixins,
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