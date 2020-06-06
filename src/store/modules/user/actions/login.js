import axios from 'axios';
import router from '../../../../router/index';
import { URL } from '../../../../data/url';
import { errorMsgUser } from '../../../../data/errors';

const login = async ({ commit }, user) => {
  commit('setLoginLoading', true);
  try {
    let response = await axios.post(URL + 'api/user/login', user);
    if (response.data.access_token) {
      localStorage.setItem('blog_token', response.data.access_token); // CREDENCIALES CORRECTAS ✅
      router.push('/inicio');
    } else {
      commit('setLoginServerMsg', response.data.message); // CREDENCIALES INCORRECTAS ❌
      setTimeout(() => commit('setLoginServerMsg', ''), 10000);
    }
  } catch (error) {
    // ERROR EN EL SERVIDOR 🔥
    if (error.response.status === 404) {
      commit('setLoginErrorMsg', errorMsgUser.login404);
    } else if (error.response.status === 500) {
      commit('setLoginErrorMsg', errorMsgUser.login500);
    } else {
      commit('setLoginErrorMsg', errorMsgUser.loginUn);
    }
    setTimeout(() => commit('setLoginErrorMsg', ''), 10000);
  } finally {
    commit('setLoginLoading', false);
  }
};

export default login;
