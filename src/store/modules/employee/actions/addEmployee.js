const addEmployee = ({ commit }, employee) => {
  commit('setAddEmployee', employee);
};

export default addEmployee;
