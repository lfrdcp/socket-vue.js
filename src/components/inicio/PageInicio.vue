<template>
  <v-content>
    <v-container class="fill-height" fluid>
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
import { mapState } from "vuex";
export default {
  name: "PageInicio",
  components: {
    Dashboard,
    Snackbar,
  },
  computed: {
    ...mapState("currentUser", ["snackbar"]),
  },
  created() {
    this.$store.dispatch("currentUser/getUser");
  },
};
</script>
