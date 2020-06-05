import axios from 'axios';
import { URL } from '../../../../data/url';
import { convertObjectErrors } from '../../../../utils/convertObjectErrors';

const update = async ({ commit }, params) => {
  commit('setUpdateLoading', true);
  try {
    let response = await axios.post(URL + 'api', params);
    if (response.data.status === 'c8usu0') {
      // CÓDIGO EXITOSO ✅
      commit('setUpdateSnackbar', true);
      commit('setUpdateMessage', '');
    } else if (response.data.status === '1F4usu0') {
      // CÓDIGO ERRONEO AL GUARDAR 🔥
      commit('setUpdateMessage', 'Error de servidor, intente más tarde');
    } else if (response.data.errors) {
      // REQUISITOS SIN CUMPLIR ❌
      let errors = convertObjectErrors(response.data.errors);
      commit('setUpdateMessage', errors);
    }
  } catch (error) {
    // ERROR EN EL SERVIDOR 🔥
    commit('setUnexpectedError', true);
    commit('setUpdateMessage', 'Error de servidor, intente más tarde');
  } finally {
    commit('setUpdateLoading', false);
  }
};

export default update;
