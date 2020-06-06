const msg500 = 'Error 500, intente más tarde ';
const msg404 = 'Error 404, intente más tarde ';
const msgUn = 'Error no identificado, intente más tarde ';
const msgServer = 'Error de lógica, intente más tarde ';

export const errorMsgUser = {
  login500: msg500 + '(Iniciar sesión)',
  login404: msg404 + '(Iniciar sesión)',
  loginUn: msgUn + '(Iniciar sesión)',

  register500: msg500 + '(Registarse)',
  register404: msg404 + '(Registarse)',
  registerUn: msgUn + '(Registarse)',
  registerServer: msgServer + '(Registarse)',

  update500: msg500 + '(Actualizar usuario)',
  update404: msg404 + '(Actualizar usuario)',
  updateUn: msgUn + '(Actualizar usuario)',
  updateServer: msgServer + '(Actualizar usuario)',

  setUpUser500: msg500 + '(Datos usuario)',
  setUpUser404: msg404 + '(Datos usuario)',
  setUpUserUn: msgUn + '(Datos usuario)',
};

export const errorMsgEmployee = {
  create500: msg500 + '(Crear empleado)',
  create404: msg404 + '(Crear empleado)',
  createUn: msgUn + '(Crear empleado)',
  createServer: msgServer + '(Crear empleado)',
};
