import axios from 'axios';

import { URL } from '../../../../data/url';
import { convertObjectErrors } from '../../../../utils/convertObjectErrors';

const create = async ({ commit }, employee) => {
  commit('setEmployeeLoading', true);

  try {
    let response = await axios.post(URL + 'api/dsadas/dsada', employee);
    if (response.data.status === '') {
      // CÓDIGO CORRECTO ✅

      commit('setEmployeeMessage', '');
      commit('setEmployeesAdd', employee);
      commit('setEmployeeSnackbar', true);
      setTimeout(() => commit('setEmployeeSnackbar', false), 5000);
    } else if (response.data.status === '') {
      // CÓDIGO ERRONEO AL GUARDAR 🔥
      commit('setEmployeeMessage', 'Error de servidor, intente más tarde');
    } else if (response.data.errors) {
      // CONFLICTO EN SERVIDOR O CREDENCIALES INCORRECTAS ❌
      let errors = convertObjectErrors(response.data.errors);
      commit('setEmployeeMessage', errors);
    }
  } catch (error) {
    commit('setUnexpectedError', true); // ERROR EN EL SERVIDOR 🔥
  } finally {
    commit('setEmployeeLoading', false);
  }
};

export default create;
