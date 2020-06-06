export const mutations = {
  setAddEmployee(state, data) {
    state.employees.push({ ...data });
  },

  setEmployees(state, data) {
    state.employees = data;
  },

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
};
