export const mutations = {
  setUser(state, data) {
    state.user = data;
  },
  setUserServerMsg(state, data) {
    state.userServerMsg = data;
  },
  setUserErrorMsg(state, data) {
    state.userErrorMsg = data;
  },

  setImg(state, data) {
    state.img = data;
  },

  // login
  setLoginLoading(state, data) {
    state.loginLoading = data;
  },
  setLoginSuccessMsg(state, data) {
    state.loginSuccessMsg = data;
  },
  setLoginServerMsg(state, data) {
    state.loginServerMsg = data;
  },
  setLoginErrorMsg(state, data) {
    state.loginErrorMsg = data;
  },

  // update
  setUpdateLoading(state, data) {
    state.updateLoading = data;
  },
  setUpdateSuccessMsg(state, data) {
    state.updateSuccessMsg = data;
  },
  setUpdateServerMsg(state, data) {
    state.updateServerMsg = data;
  },
  setUpdateErrorMsg(state, data) {
    state.updateErrorMsg = data;
  },

  // register
  setRegisterLoading(state, data) {
    state.loading = data;
  },
  setRegisterSuccessMsg(state, data) {
    state.registerSuccessMsg = data;
  },
  setRegisterServerMsg(state, data) {
    state.registerServerMsg = data;
  },
  setRegisterErrorMsg(state, data) {
    state.registerErrorMsg = data;
  },
};
