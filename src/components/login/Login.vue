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
            <Alert
              color="warning"
              :icono="icons.warning"
              :texto="loginMessage"
              v-if="loginMessage"
            />
            <LoginSVG width="65%" height="65%" />
          </v-container>

          <v-form v-model="valid">
            <v-text-field
              label="Correo electrónico"
              name="login"
              :prepend-icon="icons.person"
              type="email"
              outlined
              color="primary"
              required
              :rules="emailRules"
              v-model="user.email"
            />

            <v-text-field
              id="password"
              label="Contraseña"
              name="password"
              :prepend-icon="icons.password"
              type="password"
              outlined
              color="primary"
              required
              :rules="passwordRules"
              v-model="user.password"
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
        <v-card-actions>
          <v-btn to="register" color="primary" block>Registarse</v-btn>
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
export default {
  name: 'Login',
  components: {
    DialogHelpSign,
    Alert,
    ProgressLinear,
    LoginSVG,
  },
  data: () => ({
    valid: true,
    passwordRules: [rules.minimumEight],
    emailRules: [rules.empty, rules.email],
    icons: icons,
    user: {
      email: '',
      password: '',
    },
  }),
  computed: {
    ...mapState('currentUser', ['loginMessage']),
    ...mapState('currentUser', ['loginLoading']),
  },
  methods: {
    login() {
      this.$store.dispatch('currentUser/loginUser', this.user);
    },
  },
};
</script>
