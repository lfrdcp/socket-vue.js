import axios from 'axios';

import { URL } from '../../../data/url';
import { convertObjectErrors } from '../../../utils/convertObjectErrors';

const state = {
  employees: [
    { id: 1, email: 'alfredo@gmail.com' },
    { id: 2, email: 'alejandro@gmail.com' },
    { id: 3, email: 'santiago@gmail.com' },
  ],

  employeeMessage: '',
  employeeSnackbar: false,
  employeeLoading: false,

  unexpectedError: false,
};

const mutations = {
  setEmployeesAdd(state, data) {
    state.employees.push({ ...data });
  },

  setEmployees(state, data) {
    state.employees = data;
  },

  setEmployeeMessage(state, data) {
    state.employeeMessage = data;
  },

  setEmployeeSnackbar(state, data) {
    state.employeeSnackbar = data;
  },

  setEmployeeLoading(state, data) {
    state.employeeLoading = data;
  },
  setUnexpectedError(state, data) {
    state.unexpectedError = data;
  },
};

const actions = {
  async createEmployee({ commit }, employee) {
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
  },
};

const getters = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
