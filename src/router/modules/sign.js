import PageError404 from '../../components/error/PageError404.vue';
import PageLogin from '../../components/login/PageLogin.vue';
import PageRegister from '../../components/register/PageRegister.vue';

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
