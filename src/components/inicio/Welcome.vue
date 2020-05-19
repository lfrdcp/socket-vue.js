<template>
  <v-container>
    <v-card class="elevation-24" shaped>
      <v-toolbar>
        <v-toolbar-title>Tareas</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-icon>note </v-icon>
      </v-toolbar>
    </v-card>

    <v-row cols="12" sm="8" md="4">
      <v-col>
        <router-view />
      </v-col>
      <v-col>
        <v-card class="elevation-24" shaped>
          <v-toolbar dark>
            <v-toolbar-title>Todas las tareas</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-icon>note </v-icon>
          </v-toolbar>
          <v-card-text>
            <Calendar />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapState } from "vuex";
import Calendar from "../calendar/Calendar";
export default {
  name: "Welcome",
  data: () => ({
    time: "",
    date: "",
  }),
  components: {
    Calendar,
  },
  computed: {
    ...mapState("currentUser", ["user"]),
  },
  created() {
    setInterval(this.getNow, 1000);
  },
  methods: {
    getNow: function() {
      const today = new Date();
      const date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      const time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      this.time = time;
      this.date = date;
    },
  },
};
</script>
