<template>
  <v-content>
    <v-container>
      <Snackbar
        v-bind:snackbar="registerSnackbar"
        text="Registrado correctamente"
        color="success"
      />

      <Alert
        color="error"
        icono="error"
        texto="Error de servidor, intente más tarde"
        v-if="unexpectedError"
      />

      <Login />
    </v-container>
  </v-content>
</template>

<script>
import Login from '../login/Login';
import Snackbar from '../snackbar/Snackbar';
import Alert from '../alert/Alert';
import { mapState } from 'vuex';

export default {
  name: 'PaginaLogin',
  components: {
    Login,
    Snackbar,
    Alert,
  },

  computed: {
    ...mapState('registerUser', ['registerSnackbar']),
    ...mapState('currentUser', ['unexpectedError']),
  },
};
</script>
