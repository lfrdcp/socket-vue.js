<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-tour name="myTour" :steps="steps" :options="myOptions"></v-tour>
      <Dashboard />
      <transition mode="out-in">
        <router-view></router-view>
      </transition>
    </v-container>
  </v-content>
</template>

<script>
import Dashboard from '../components/dashboard/Dashboard';
import { steps, myOptions } from '../data/vueTour';

import { icons } from '../data/icons';
export default {
  name: 'PageInicio',
  components: {
    Dashboard,
  },
  data: () => ({ icons: icons, myOptions: myOptions, steps: steps }),

  created() {
    this.$store.dispatch('user/setUpUser');
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
