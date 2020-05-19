<template>
  <v-card class="elevation-24" shaped>
    <v-toolbar dark>
      <v-toolbar-title>Editar datos</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon>create </v-icon>
    </v-toolbar>

    <v-card-title class="justify-center"> </v-card-title>

    <v-container>
      <Alert color="warning" icono="warning" :texto="message" v-if="message" />
    </v-container>

    <v-card-text>
      <v-form v-model="valid">
        <DialogImageProfile />
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
</template>
<script>
import Alert from "../../alert/Alert";
import DialogImageProfile from "../../dialog/DialogImageProfile";
import ProgressLinear from "../../progressLinear/ProgressLinear";
import { rules } from "../../rulesForm/RulesForm";
import { mapState } from "vuex";

export default {
  name: "PersonalEdit",
  components: {
    Alert,
    ProgressLinear,
    DialogImageProfile,
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
