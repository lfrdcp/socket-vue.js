import axios from 'axios';
import router from '../../../../router/index';
import { URL } from '../../../../data/url';
import { convertObjectErrors } from '../../../../utils/convertObjectErrors';
import { msjErrorUser } from '../../../../data/errors';

const register = async ({ commit }, user) => {
  commit('setRegisterLoading', true);
  try {
    let response = await axios.post(URL + 'api/user/register', user);
    if (response.data.status === 'c8usu0') {
      // CÓDIGO CORRECTO ✅

      commit('setRegisterMessage', '');
      commit('setRegisterSnackbar', true);
      setTimeout(() => commit('setRegisterSnackbar', false), 5000);
      router.push('/login');
    } else if (response.data.status === '1F4usu0') {
      commit('setRegisterMessage', 'Error de servidor, intente más tarde'); // CÓDIGO ERRONEO AL GUARDAR 🔥
    } else if (response.data.errors) {
      let errors = convertObjectErrors(response.data.errors); // CREDENCIALES INCORRECTAS ❌
      commit('setRegisterMessage', errors);
    }
  } catch (error) {
    commit('setUnexpectedError', msjErrorUser.register500); // ERROR EN EL SERVIDOR 🔥
  } finally {
    commit('setRegisterLoading', false);
  }
};

export default register;
