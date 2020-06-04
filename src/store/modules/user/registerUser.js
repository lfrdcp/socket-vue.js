import axios from 'axios';
import router from '../../../router/index';

import { URL } from '../../../data/url';
import { convertObjectErrors } from '../../../utils/convertObjectErrors';

const state = {
  user: {},

  registerMessage: '',
  registerSnackbar: false,
  registerLoading: false,

  unexpectedError: false,
};

const mutations = {
  setRegisterMessage(state, data) {
    state.registerMessage = data;
  },

  setRegisterSnackbar(state, data) {
    state.registerSnackbar = data;
  },

  setRegisterLoading(state, data) {
    state.loading = data;
  },
  setUnexpectedError(state, data) {
    state.unexpectedError = data;
  },
};

const actions = {
  async registerUser({ commit }, user) {
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
        // CÓDIGO ERRONEO AL GUARDAR 🔥
        commit('setRegisterMessage', 'Error de servidor, intente más tarde');
      } else if (response.data.errors) {
        // CONFLICTO EN SERVIDOR O CREDENCIALES INCORRECTAS ❌
        let errors = convertObjectErrors(response.data.errors);
        commit('setRegisterMessage', errors);
      }
    } catch (error) {
      commit('setUnexpectedError', true); // ERROR EN EL SERVIDOR 🔥
    } finally {
      commit('setRegisterLoading', false);
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
