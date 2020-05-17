<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="4">
      <v-card class="elevation-24" shaped>
        <v-toolbar color="primary" dark>
          <v-toolbar-title>Iniciar sesion</v-toolbar-title>
          <v-spacer></v-spacer>
          <HelpButton />
        </v-toolbar>

        <v-card-title class="justify-center"> </v-card-title>
        <v-img
          :src="require('../../assets/img/login.png')"
          aspect-ratio="2"
          contain
        />

        <v-container>
          <Alert
            color="warning"
            icono="warning"
            :texto="message"
            v-if="message"
          />
        </v-container>

        <v-card-text>
          <v-form v-model="valid">
            <v-text-field
              label="Correo electrónico"
              name="login"
              prepend-icon="person"
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
              prepend-icon="lock"
              type="password"
              outlined
              color="primary"
              required
              :rules="passwordRules"
              v-model="user.password"
            />
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-btn
            block
            color="primary"
            type="submit"
            @click="login"
            :disabled="!valid"
            >Iniciar sesion</v-btn
          >
        </v-card-actions>
        <v-card-actions>
          <v-btn to="register" color="grey" block>Registarse</v-btn>
        </v-card-actions>
        <v-container>
          <ProgressLinear v-bind:loading="loading" color="primary" />
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import HelpButton from "../button/HelpButton";
import Alert from "../alert/Alert";
import ProgressLinear from "../progressLinear/ProgressLinear";
import { rules } from "../rulesForm/RulesForm";
import { mapState } from "vuex";

export default {
  name: "Login",
  components: {
    HelpButton,
    Alert,
    ProgressLinear,
  },
  data: () => ({
    valid: true,
    passwordRules: [rules.minimumEight],
    emailRules: [rules.empty, rules.email],
    user: {
      email: "",
      password: "",
    },
  }),
  computed: {
    message: {
      get() {
        return this.$store.state.currentUser.loginMessage;
      },
    },
    ...mapState("currentUser", ["loading"]),
  },
  methods: {
    login() {
      this.$store.dispatch("currentUser/loginUser", this.user);
    },
  },
};
</script>
