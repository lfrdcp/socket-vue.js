export const mutations = {
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
