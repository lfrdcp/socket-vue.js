export const mutations = {
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
