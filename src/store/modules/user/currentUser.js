import axios from 'axios';
import router from '../../../router/index';
import { URL } from '../../../data/url';
import { convertObjectErrors } from '../../../utils/convertObjectErrors';

const state = {
  user: {},
  unexpectedError: false,

  loginLoading: false,
  loginSnackbar: false,
  loginMessage: '',

  updateSnackbar: false,
  updateLoading: false,
  updateMessage: '',

  img: 1,
};

const mutations = {
  setUser(state, data) {
    state.user = data;
  },

  setImg(state, data) {
    state.img = data;
  },

  setLoginMessage(state, data) {
    state.loginMessage = data;
  },

  setLoginSnackbar(state, data) {
    state.loginSnackbar = data;
  },

  setLoginLoading(state, data) {
    state.loginLoading = data;
  },

  setUpdateMessage(state, data) {
    state.updateMessage = data;
  },

  setUpdateSnackbar(state, data) {
    state.updateSnackbar = data;
  },

  setUpdateLoading(state, data) {
    state.updateLoading = data;
  },

  setUnexpectedError(state, data) {
    state.unexpectedError = data;
  },
};

const actions = {
  async updateUser({ commit }, params) {
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
  },

  inputImg({ commit }, img) {
    commit('setImg', img);
  },

  async getUser({ commit }) {
    try {
      let response = await axios.get(URL + 'api/user/current');
      commit('setUser', response.data);
    } catch (error) {
      commit('setUnexpectedError', true);
    }
  },

  async loginUser({ commit }, user) {
    commit('setLoginLoading', true);
    try {
      let response = await axios.post(URL + 'api/user/login', user);
      if (response.data.access_token) {
        // CREDENCIALES CORRECTAS ✅
        localStorage.setItem('blog_token', response.data.access_token);
        commit('setLoginMessage', '');
        commit('setLoginSnackbar', true);
        router.push('/inicio');
      } else {
        commit('setLoginMessage', response.data.message); // CREDENCIALES INCORRECTAS ❌
      }
    } catch (error) {
      commit('setUnexpectedError', true); // ERROR EN EL SERVIDOR 🔥
    } finally {
      commit('setLoginLoading', false);
    }
  },

  logoutUser() {
    localStorage.removeItem('blog_token');
    router.push('/login');
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
