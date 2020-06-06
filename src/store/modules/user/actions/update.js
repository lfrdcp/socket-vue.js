import axios from 'axios';
import { URL } from '../../../../data/url';

import { convertObjectErrors } from '../../../../utils/convertObjectErrors';

import { errorMsgUser } from '../../../../data/errors';
import { successMsgUser } from '../../../../data/sucess';

const update = async ({ commit, state }, params) => {
  commit('setUpdateLoading', true);

  try {
    let response = await axios.post(
      URL + 'api/user/updateuser/' + state.user.id,
      JSON.stringify({ ...params })
    );

    console.log(response.data);
    if (response.data.status === 'c8usu1') {
      commit('setUpdateSuccessMsg', successMsgUser.updated); // CÓDIGO CORRECTO ✅
      setTimeout(() => commit('setUpdateSuccessMsg', false), 10000);
    } else if (response.data.status === '1F4usu1') {
      commit('setUpdateServerMsg', errorMsgUser.updateServer); // CÓDIGO ERRONEO DE LÓGICA 🔥
    } else if (response.data.errors) {
      let errors = convertObjectErrors(response.data.errors); // CREDENCIALES INCORRECTAS ❌
      commit('setUpdateServerMsg', errors);
    }
  } catch (error) {
    // ERROR EN EL SERVIDOR 🔥
    console.log(error.response);
    if (error.response.status === 404) {
      commit('setUpdateErrorMsg', errorMsgUser.update404);
    } else if (error.response.status === 500) {
      commit('setUpdateErrorMsg', errorMsgUser.update500);
    } else {
      commit('setUpdateErrorMsg', errorMsgUser.updateUn);
    }
    setTimeout(() => commit('setUpdateErrorMsg', ''), 10000);
  } finally {
    commit('setUpdateLoading', false);
  }
};

export default update;
