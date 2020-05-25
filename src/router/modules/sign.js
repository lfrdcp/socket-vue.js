import PageError404 from '../../pages/PageError404.vue';
import PageLogin from '../../pages/PageLogin.vue';
import PageRegister from '../../pages/PageRegister.vue';

export default [
  {
    path: '*',
    component: PageError404,
  },
  {
    path: '/login',
    component: PageLogin,
    name: 'login',
  },
  {
    path: '/register',
    component: PageRegister,
    name: 'register',
  },
];
