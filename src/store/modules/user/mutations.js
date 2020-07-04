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

  // register
  setRegisterSuccessMsg(state, data) {
    state.registerSuccessMsg = data;
  },
};
