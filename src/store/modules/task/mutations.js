export const mutations = {
  setCRUDButton(state, data) {
    state.CRUDButton = data;
  },

  // create
  setCreateLoading(state, data) {
    state.createLoading = data;
  },

  setCreateSuccessMsg(state, data) {
    state.createSuccessMsg = data;
  },

  setCreateServerMsg(state, data) {
    state.createServerMsg = data;
  },

  setCreateErrorMsg(state, data) {
    state.createErrorMsg = data;
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
};
