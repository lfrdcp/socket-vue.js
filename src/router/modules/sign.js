import PageError404 from '../../pages/PageError404.vue';
import PageLogin from '../../pages/PageLogin.vue';
import PageRegister from '../../pages/PageRegister.vue';
import PageMain from '../../pages/PageMain.vue';

export default [
  {
    path: '*',
    component: PageError404,
  },
  {
    path: '/',
    component: PageMain,
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
