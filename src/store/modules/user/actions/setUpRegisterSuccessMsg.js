import { successMsgUser } from '../../../../data/sucess';

const setUpRegisterSuccessMsg = async ({ commit }) => {
  commit('setRegisterSuccessMsg', successMsgUser.created); // CÓDIGO CORRECTO ✅
  setTimeout(() => commit('setRegisterSuccessMsg', false), 10000);
};

export default setUpRegisterSuccessMsg;
