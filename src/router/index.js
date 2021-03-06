import Vue from 'vue';
import axios from 'axios';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import { URL } from '../data/url';

import PageInicio from '../pages/PageInicio.vue';

import sign from './modules/sign';
import task from './modules/task';
import profile from './modules/profile';
import storeEmployee from './modules/storeEmployee';

const routes = [
  ...sign,
  {
    path: '/inicio',
    component: PageInicio,
    meta: { requiresAuth: true },
    children: [...task, ...profile, ...storeEmployee],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    axios.defaults.headers['Content-Type'] = 'application/json';
    axios.defaults.headers.common['Authorization'] = blog_token();
    try {
      await axios.get(URL + 'api/user/vtoken');

      next();
    } catch (error) {
      router.replace('/login');
    }
  } else {
    next();
  }
});

const blog_token = () => {
  return 'Bearer ' + localStorage.getItem('blog_token');
};

export default router;
