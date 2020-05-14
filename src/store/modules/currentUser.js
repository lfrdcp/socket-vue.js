import axios from "axios";
import router from "../../router/index";
import { URL } from "../urlBackend"

const state = {
  user: {},
  loginMessage: "",
  snackbar: false,
  loading: false
};

const getters = {};

const actions = {

  getUser({ commit }) {
    axios
      .get(URL + "api/user/current")
      .then((response) => {
        commit("setUser", response.data);
      })
  },

  loginUser({ commit }, user) {
    commit("setLoading", true);
    axios
      .post(URL + "api/user/login", {
        email: user.email,
        password: user.password,
      })
      .then((response) => {
        if (response.data.access_token) {
          localStorage.setItem("blog_token", response.data.access_token);
          router.push("/inicio")
          commit("setSnackbar", true);
          commit("setLoginMessage", "");
          commit("setLoading", false);
        } else {
          commit("setLoginMessage", response.data.message);
          commit("setLoading", false);
        }
      })
      .catch((error) => {
        console.log(error);
        commit("setLoading", false);
      });
  },

  logoutUser() {
    localStorage.removeItem("blog_token");
    router.push("/login")

  },
};

const mutations = {
  setUser(state, data) {
    state.user = data;
  },

  setLoginMessage(state, data) {
    state.loginMessage = data;
  },

  setSnackbar(state, data) {
    state.snackbar = data;
  },

  setLoading(state, data) {
    state.loading = data;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
