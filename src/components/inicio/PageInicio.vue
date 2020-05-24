<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-tour name="myTour" :steps="steps" :options="myOptions"></v-tour>
      <Dashboard />
      <Snackbar
        v-bind:snackbar="loginSnackbar"
        text="Ha iniciado sesion de manera correcta"
        color="success"
      />

      <v-col class="text-center">
        <Alert
          color="error"
          icono="error"
          texto="Error de servidor, intente más tarde"
          v-if="unexpectedError"
        />
        <router-view></router-view>
      </v-col>
    </v-container>
  </v-content>
</template>

<script>
import Dashboard from '../dashboard/Dashboard';
import Snackbar from '../snackbar/Snackbar';
import Alert from '../alert/Alert';
import { steps, myOptions } from '../../data/vueTour';
import { mapState } from 'vuex';

export default {
  name: 'PageInicio',
  components: {
    Dashboard,
    Snackbar,
    Alert,
  },
  data: () => ({
    myOptions: myOptions,
    steps: steps,
  }),
  computed: {
    ...mapState('currentUser', ['loginSnackbar', 'unexpectedError']),
  },
  created() {
    this.$store.dispatch('currentUser/getUser');
  },
  // mounted: function() {
  //   this.$tours['myTour'].start();
  // },
};
</script>
