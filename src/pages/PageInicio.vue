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

      <v-col>
        <Alert
          color="error"
          :icono="icons.error"
          texto="Error de servidor, intente más tarde"
          v-if="unexpectedError"
        />
        <transition mode="out-in">
          <router-view></router-view>
        </transition>
      </v-col>
    </v-container>
  </v-content>
</template>

<script>
import Dashboard from '../components/dashboard/Dashboard';
import Snackbar from '../components/snackbar/Snackbar';
import Alert from '../components/alert/Alert';
import { steps, myOptions } from '../data/vueTour';
import { mapState } from 'vuex';
import { icons } from '../data/icons';
export default {
  name: 'PageInicio',
  components: {
    Dashboard,
    Snackbar,
    Alert,
  },
  data: () => ({ icons: icons, myOptions: myOptions, steps: steps }),
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

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
</style>
