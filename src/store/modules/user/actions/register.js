import axios from 'axios';
import router from '../../../../router/index';
import { URL } from '../../../../data/url';
import { convertObjectErrors } from '../../../../utils/convertObjectErrors';
import { errorMsgUser } from '../../../../data/errors';
import { successMsgUser } from '../../../../data/sucess';

const register = async ({ commit }, user) => {
  commit('setRegisterLoading', true);
  try {
    let response = await axios.post(URL + 'api/user/register', user);
    if (response.data.status === 'c8usu0') {
      commit('setRegisterSuccessMsg', successMsgUser.created); // CÓDIGO CORRECTO ✅
      setTimeout(() => commit('setRegisterSuccessMsg', false), 10000);
      router.push('/login');
    } else if (response.data.status === '1F4usu0') {
      commit('setRegisterServerMsg', errorMsgUser.registerServer); // CÓDIGO ERRONEO DE LÓGICA 🔥
    } else if (response.data.errors) {
      let errors = convertObjectErrors(response.data.errors); // CREDENCIALES INCORRECTAS ❌
      commit('setRegisterServerMsg', errors);
    }
  } catch (error) {
    // ERROR EN EL SERVIDOR 🔥
    if (error.response.status === 404) {
      commit('setRegisterErrorMsg', errorMsgUser.register404);
    } else if (error.response.status === 500) {
      commit('setRegisterErrorMsg', errorMsgUser.register500);
    } else {
      commit('setRegisterErrorMsg', errorMsgUser.registerUn);
    }
    setTimeout(() => commit('setRegisterErrorMsg', ''), 10000);
  } finally {
    commit('setRegisterLoading', false);
  }
};

export default register;
