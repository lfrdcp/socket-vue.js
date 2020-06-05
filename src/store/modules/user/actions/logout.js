import router from '../../../../router/index';

const logout = () => {
  localStorage.removeItem('blog_token');
  router.push('/login');
};

export default logout;
