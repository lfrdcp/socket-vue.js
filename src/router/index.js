import Vue from 'vue';
import axios from 'axios';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const URL = 'http://pointsale.boxcode.com.mx/';

import PageInicio from '../components/inicio/PageInicio.vue';

import sign from './modules/sign';
import welcome from './modules/welcome';
import profile from './modules/profile';
import storeEmployee from './modules/storeEmployee';

const routes = [
  ...sign,
  {
    path: '/inicio',
    component: PageInicio,
    meta: { requiresAuth: true },
    children: [...welcome, ...profile, ...storeEmployee],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    axios.defaults.headers.common['Authorization'] =
      'Bearer ' + localStorage.getItem('blog_token');
    axios
      .get(URL + 'api/user/vtoken')
      .then(() => {
        next();
      })
      .catch(() => {
        router.replace('/login');
      });
  } else {
    next();
  }
});

export default router;
