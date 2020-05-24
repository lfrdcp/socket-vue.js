import Vue from 'vue';
import Vuex from 'vuex';

import currentUser from './modules/user/currentUser';
import registerUser from './modules/user/registerUser';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    currentUser,
    registerUser,
  },
});
