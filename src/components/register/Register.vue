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
            <Alert
              color="warning"
              icono="warning"
              :texto="registerMessage"
              v-if="registerMessage"
            />
            <RegisterSVG width="65%" height="65%" />
          </v-container>

          <v-form v-model="valid">
            <v-text-field
              label="Nombre"
              name="name"
              prepend-icon="person"
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
              prepend-icon="person"
              type="text"
              outlined
              color="primary"
              required
              :rules="emptyRules"
              v-model="user.lastName"
            />

            <v-text-field
              label="Correo electrónico"
              name="email"
              prepend-icon="email"
              type="email"
              outlined
              color="primary"
              required
              :rules="emailRules"
              v-model="user.email"
            />

            <v-text-field
              label="Código para caja"
              name="code"
              prepend-icon="vpn_key"
              type="number"
              outlined
              color="primary"
              required
              :rules="onlyFourCharacters"
              v-model="user.verifierCode"
            />

            <v-text-field
              label="Contraseña"
              name="password"
              prepend-icon="lock"
              type="password"
              outlined
              color="primary"
              required
              :rules="passwordRules"
              v-model="user.password"
            />

            <v-text-field
              label="Confirmar contraseña"
              name="password"
              prepend-icon="lock"
              type="password"
              outlined
              color="primary"
              required
              :rules="passwordRules.concat(passwordMatch)"
              v-model="user.confirmPassword"
            />
          </v-form>
          <ProgressLinear v-bind:loading="registerLoading" color="primary" />
        </v-card-text>

        <v-card-actions>
          <v-btn
            block
            color="primary"
            type="submit"
            @click="register"
            :disabled="!valid"
            >Registarse</v-btn
          >
        </v-card-actions>
        <v-card-actions>
          <v-btn to="login" color="primary" block>Iniciar sesion</v-btn>
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
import RegisterSVG from '../../assets/img/Register.svg';
export default {
  name: 'Register',
  components: {
    DialogHelpSign,
    Alert,
    ProgressLinear,
    RegisterSVG,
  },
  data: () => ({
    valid: true,
    user: {
      name: '',
      lastName: '',
      verifierCode: '',
      email: '',
      password: '',
      confirmPassword: '',
    },

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
    ...mapState('registerUser', ['registerLoading', 'registerMessage']),
  },

  methods: {
    register() {
      this.$store.dispatch('registerUser/registerUser', this.user);
    },
  },
};
</script>
