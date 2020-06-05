const msj500 = 'Error 500, intente más tarde ';
const msj404 = 'Error 404, intente más tarde ';
const msjUn = 'Error no identificado, intente más tarde ';

export const msjErrorUser = {
  login500: msj500 + '(Iniciar sesión)',
  login404: msj404 + '(Iniciar sesión)',
  loginUn: msjUn + '(Iniciar sesión)',

  register500: msj500 + '(Registarse)',
  register404: msj404 + '(Registarse)',
  registerUn: msjUn + '(Registarse)',

  setUpUser500: msj500 + '(Datos usuario)',
  setUpUser404: msj404 + '(Datos usuario)',
  setUpUserUn: msjUn + '(Datos usuario)',

  updateUser500: msj500 + '(Actualizar usuario)',
  updateUser404: msj404 + '(Actualizar usuario)',
  updateUserUn: msjUn + '(Actualizar usuario)',
};
