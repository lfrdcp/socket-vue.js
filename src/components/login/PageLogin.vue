<template>
  <v-content>
    <v-container>
      <Snackbar
        v-bind:snackbar="snackbar"
        text="Registrado correctamente"
        color="success"
      />
      <Login />
    </v-container>
  </v-content>
</template>

<script>
import Login from "../login/Login";
import Snackbar from "../snackbar/Snackbar";
import { mapState } from "vuex";

export default {
  name: "PaginaLogin",
  components: {
    Login,
    Snackbar,
  },

  computed: {
    ...mapState("registerUser", ["snackbar"]),
  },
};
</script>
