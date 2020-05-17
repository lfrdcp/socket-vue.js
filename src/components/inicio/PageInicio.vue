<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-tour name="myTour" :steps="steps" :options="myOptions"></v-tour>
      <Dashboard />
      <Snackbar
        v-bind:snackbar="snackbar"
        text="Ha iniciado sesion de manera correcta"
        color="success"
      />
      <v-col class="text-center">
        <router-view></router-view>
      </v-col>
    </v-container>
  </v-content>
</template>
<script>
import Dashboard from "../dashboard/Dashboard";
import Snackbar from "../snackbar/Snackbar";
import { steps, myOptions } from "../../data/vueTour";
import { mapState } from "vuex";
export default {
  name: "PageInicio",
  components: {
    Dashboard,
    Snackbar,
  },
  data: () => ({
    myOptions: myOptions,
    steps: steps,
  }),
  computed: {
    ...mapState("currentUser", ["snackbar"]),
  },
  created() {
    this.$store.dispatch("currentUser/getUser");
  },
  mounted: function() {
    this.$tours["myTour"].start();
  },
};
</script>
