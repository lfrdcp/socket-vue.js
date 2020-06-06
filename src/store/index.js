import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import user from './modules/user/user';
import employee from './modules/employee/employee';

export default new Vuex.Store({
  modules: {
    user,
    employee,
  },
});
