<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="4">
      <v-card class="elevation-24" shaped>
        <v-toolbar dark>
          <v-toolbar-title>Iniciar sesion</v-toolbar-title>
          <v-spacer></v-spacer>
          <DialogHelpSign />
        </v-toolbar>

        <v-card-text>
          <v-container class="text-center">
            <LoginSVG width="65%" height="65%" />
          </v-container>

          <v-form v-model="valid">
            <Alert
              color="success"
              :icono="icons.check"
              :texto="registerSuccessMsg"
              v-if="registerSuccessMsg"
            />
            <Alert
              color="warning"
              :icono="icons.warning"
              :texto="loginServerMsg"
              v-if="loginServerMsg"
            />
            <Alert
              color="error"
              icono="error"
              :texto="loginErrorMsg"
              v-if="loginErrorMsg"
            />
            <v-text-field
              label="Correo "
              v-model="user.email"
              name="login"
              :prepend-icon="icons.person"
              type="email"
              outlined
              color="primary"
              required
              :rules="emailRules"
            />

            <v-text-field
              label="Contraseña"
              v-model="user.password"
              color="primary"
              name="password"
              outlined
              required
              :rules="passwordRules"
              :prepend-icon="icons.password"
              :type="showPassword ? 'text' : 'password'"
              :append-icon="showPassword ? icons.eyeOn : icons.eyeOff"
              @click:append="showPassword = !showPassword"
              @keyup.enter="valid ? login() : false"
            />
          </v-form>

          <ProgressLinear v-bind:loading="loginLoading" color="primary" />
        </v-card-text>

        <v-card-actions>
          <v-btn
            block
            color="primary"
            type="submit"
            @click="login"
            :disabled="!valid"
            >Iniciar sesion
          </v-btn>
        </v-card-actions>
        <v-card-actions
          ><v-col cols="6">
            <v-btn text to="register" color="primary" block>
              ¿Olvidaste tu contraseña?
            </v-btn>
          </v-col>
          <v-col cols="6">
            <v-btn text to="register" color="primary" block>registrarse</v-btn>
          </v-col>
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
import { mapState } from 'vuex';
import LoginSVG from '../../assets/img/Login.svg';
import { icons } from '../../data/icons';
import axios from 'axios';
import router from '../../router/index';
import { URL } from '../../data/url';
import { errorMsgUser } from '../../data/errors';

export default {
  name: 'Login',
  components: {
    DialogHelpSign,
    Alert,
    ProgressLinear,
    LoginSVG,
  },
  data: () => ({
    loginLoading: false,
    loginSuccessMsg: false,
    loginServerMsg: false,
    loginErrorMsg: false,

    valid: true,
    showPassword: false,
    passwordRules: [rules.minimumEight],
    emailRules: [rules.empty, rules.email],
    icons: icons,
    user: {
      email: '',
      password: '',
    },
  }),
  computed: {
    ...mapState('user', ['registerSuccessMsg']),
  },
  methods: {
    async login() {
      this.loginLoading = true;
      try {
        let response = await axios.post(URL + 'api/user/login', this.user);
        if (response.data.access_token) {
          // CREDENCIALES CORRECTAS ✅
          localStorage.setItem('blog_token', response.data.access_token);
          router.push('/inicio');
        } else {
          // CREDENCIALES INCORRECTAS ❌
          this.loginServerMsg = response.data.message;
          setTimeout(() => (this.loginServerMsg = ''), 10000);
        }
      } catch (error) {
        // ERROR EN EL SERVIDOR 🔥
        if (error.response.status === 404) {
          this.loginErrorMsg = errorMsgUser.login404;
        } else if (error.response.status === 500) {
          this.loginErrorMsg = errorMsgUser.login500;
        } else {
          this.loginErrorMsg = errorMsgUser.loginUn;
        }
        setTimeout(() => (this.loginErrorMsg = ''), 10000);
      } finally {
        this.loginLoading = false;
      }
    },
  },
};
</script>
