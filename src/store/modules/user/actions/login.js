import axios from 'axios';
import router from '../../../../router/index';
import { URL } from '../../../../data/url';
import { msjErrorUser } from '../../../../data/errors';

const login = async ({ commit }, user) => {
  commit('setLoginLoading', true);
  try {
    let response = await axios.post(URL + 'api/user/login', user);
    if (response.data.access_token) {
      localStorage.setItem('blog_token', response.data.access_token); // CREDENCIALES CORRECTAS ✅
      router.push('/inicio');
    } else {
      commit('setLoginMessage', response.data.message); // CREDENCIALES INCORRECTAS ❌
    }
  } catch (error) {
    commit('setUnexpectedError', msjErrorUser.login); // ERROR EN EL SERVIDOR 🔥
  } finally {
    commit('setLoginLoading', false);
    setTimeout(() => commit('setLoginMessage', ''), 5000);
  }
};

export default login;
