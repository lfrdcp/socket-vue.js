export const mutations = {
  setAddEmployee(state, data) {
    state.employees.push({ ...data });
  },
};
