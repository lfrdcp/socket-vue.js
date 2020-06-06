import axios from 'axios';
import { URL } from '../../../../data/url';
import { errorMsgUser } from '../../../../data/errors';

const setUpUser = async ({ commit }) => {
  try {
    let response = await axios.get(URL + 'api/user/current');
    commit('setUser', response.data.user); // RESPUESTA CORRECTAS ✅
  } catch (error) {
    commit('setUnexpectedError', errorMsgUser.setUpUser500); // ERROR EN EL SERVIDOR 🔥
  }
};

export default setUpUser;
