import axios from 'axios';
import { URL } from '../../../../data/url';
import { errorMsgUser } from '../../../../data/errors';

const setUpUser = async ({ commit }) => {
  try {
    let response = await axios.get(URL + 'api/user/current');
    commit('setUser', response.data.user); // RESPUESTA CORRECTAS ✅
  } catch (error) {
    // ERROR EN EL SERVIDOR 🔥
    if (error.response.status === 404) {
      commit('setUserErrorMsg', errorMsgUser.setUpUser404);
    } else if (error.response.status === 500) {
      commit('setUserErrorMsg', errorMsgUser.setUpUser500);
    } else {
      commit('setUserErrorMsg', errorMsgUser.setUpUserUn);
    }
    setTimeout(() => commit('setUserErrorMsg', ''), 10000);
  }
};

export default setUpUser;
