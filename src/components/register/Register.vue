<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="4">
      <v-card class="elevation-24" shaped>
        <v-toolbar dark>
          <v-toolbar-title>Registarse</v-toolbar-title>
          <v-spacer></v-spacer>
          <DialogHelpSign />
        </v-toolbar>

        <v-card-text>
          <v-container class="text-center">
            <RegisterSVG width="65%" height="65%" />
          </v-container>

          <v-form v-model="valid">
            <v-text-field
              label="Nombre"
              name="name"
              :prepend-icon="icons.person"
              type="text"
              outlined
              color="primary"
              required
              :rules="emptyRules"
              v-model="user.name"
            />

            <v-text-field
              label="Apellido"
              name="lastName"
              :prepend-icon="icons.person"
              type="text"
              outlined
              color="primary"
              required
              :rules="emptyRules"
              v-model="user.lastName"
            />

            <v-text-field
              label="Correo "
              name="email"
              :prepend-icon="icons.email"
              type="email"
              outlined
              color="primary"
              required
              :rules="emailRules"
              v-model="user.email"
            />

            <!-- <v-text-field
              label="Código para caja"
              name="code"
              :prepend-icon="icons.key"
              type="number"
              outlined
              color="primary"
              required
              :rules="onlyFourCharacters"
              v-model="user.verifierCode"
            /> -->

            <!-- <v-text-field
              label="Contraseña"
              name="password"
              :prepend-icon="icons.password"
              outlined
              color="primary"
              required
              :rules="passwordRules"
              v-model="user.password"
              :type="showPassword ? 'text' : 'password'"
              :append-icon="showPassword ? icons.eyeOn : icons.eyeOff"
              @click:append="showPassword = !showPassword"
            />

            <v-text-field
              label="Confirmar contraseña"
              name="password"
              :prepend-icon="icons.password"
              outlined
              color="primary"
              required
              :rules="passwordRules.concat(passwordMatch)"
              v-model="user.confirmPassword"
              :type="showConfirmPassword ? 'text' : 'password'"
              :append-icon="showConfirmPassword ? icons.eyeOn : icons.eyeOff"
              @click:append="showConfirmPassword = !showConfirmPassword"
            /> -->
          </v-form>
          <Alert
            color="error"
            icono="error"
            :texto="registerErrorMsg"
            v-if="registerErrorMsg"
          />
          <Alert
            color="warning"
            :icono="icons.warning"
            :texto="registerServerMsg"
            v-if="registerServerMsg"
          />
          <ProgressLinear v-bind:loading="registerLoading" color="primary" />
        </v-card-text>

        <v-card-actions>
          <v-btn
            block
            color="primary"
            type="submit"
            @click="register"
            :disabled="!valid"
            >Registarse
          </v-btn>
        </v-card-actions>
        <v-card-actions>
          <v-btn text to="login" color="primary" block>
            ¿YA TIENES UNA CUENTA? ENTONCES Inicia sesion
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import DialogHelpSign from '../dialog/DialogHelpSign';
import Alert from '../alert/Alert';
import ProgressLinear from '../progressLinear/ProgressLinear';
import { rules } from '../../utils/components/rules';
import RegisterSVG from '../../assets/img/Register.svg';
import { icons } from '../../data/icons';

import axios from 'axios';
import router from '../../router/index';
import { URL } from '../../data/url';
import { convertObjectErrors } from '../../utils/convertObjectErrors';
import { errorMsgUser } from '../../data/errors';

export default {
  name: 'Register',
  components: {
    DialogHelpSign,
    Alert,
    ProgressLinear,
    RegisterSVG,
  },
  data: () => ({
    registerLoading: false,
    registerServerMsg: false,
    registerErrorMsg: false,

    valid: true,
    showPassword: false,
    showConfirmPassword: false,
    user: {
      name: '',
      lastName: '',
      verifierCode: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    icons: icons,
    passwordRules: [rules.empty, rules.minimumEight],
    emailRules: [rules.empty, rules.email],
    emptyRules: [rules.empty],
    onlyFourCharacters: [rules.onlyFourCharacters],
  }),
  computed: {
    passwordMatch() {
      return (
        this.user.password === this.user.confirmPassword ||
        'La contraseña no coincide'
      );
    },
  },

  methods: {
    async register() {
      this.registerLoading = true;
      try {
        let response = await axios.post(URL + 'api/user/register', this.user);
        if (response.data.status === 'c8usu0') {
          this.$store.dispatch('user/setUpRegisterSuccessMsg');
          router.push('/login');
        } else if (response.data.status === '1F4usu0') {
          // CÓDIGO ERRONEO DE LÓGICA 🔥
          this.registerServerMsg = errorMsgUser.registerServer;
        } else if (response.data.errors) {
          // CREDENCIALES INCORRECTAS ❌
          let errors = convertObjectErrors(response.data.errors);
          this.registerServerMsg = errors;
        }
      } catch (error) {
        // ERROR EN EL SERVIDOR 🔥
        if (error.response.status === 404) {
          this.registerErrorMsg = errorMsgUser.register404;
        } else if (error.response.status === 500) {
          this.registerErrorMsg = errorMsgUser.register500;
        } else {
          this.registerErrorMsg = errorMsgUser.registerUn;
        }
        setTimeout(() => (this.registerErrorMsg = ''), 10000);
      } finally {
        this.registerLoading = false;
      }
    },
  },
};
</script>
