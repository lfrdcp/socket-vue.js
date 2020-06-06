import axios from 'axios';
import { URL } from '../../../../data/url';
import { convertObjectErrors } from '../../../../utils/convertObjectErrors';
import { errorMsgEmployee } from '../../../../data/errors';
import { successMsgEmployee } from '../../../../data/sucess';

const create = async ({ commit }, employee) => {
  commit('setCreateLoading', true);

  try {
    let response = await axios.post(URL + 'api/user/employee', employee);

    if (response.data.status === '') {
      commit('setAddEmployee', employee);
      commit('setCreateSuccessMsg', successMsgEmployee.created); // CÓDIGO CORRECTO ✅
      setTimeout(() => commit('setCreateSuccessMsg', false), 10000);
    } else if (response.data.status === '1F4usu0') {
      commit('setCreateServerMsg', errorMsgEmployee.createServer); // CÓDIGO ERRONEO DE LÓGICA 🔥
    } else if (response.data.errors) {
      let errors = convertObjectErrors(response.data.errors); // CREDENCIALES INCORRECTAS ❌
      commit('setCreateServerMsg', errors);
    }
  } catch (error) {
    // ERROR EN EL SERVIDOR 🔥
    if (error.response.status === 404) {
      commit('setCreateErrorMsg', errorMsgEmployee.create404);
    } else if (error.response.status === 500) {
      commit('setCreateErrorMsg', errorMsgEmployee.create500);
    } else {
      commit('setCreateErrorMsg', errorMsgEmployee.createUn);
    }
    setTimeout(() => commit('setCreateErrorMsg', ''), 10000);
  } finally {
    commit('setCreateLoading', false);
  }
};

export default create;
