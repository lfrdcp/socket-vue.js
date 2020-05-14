<template>
  <v-container>
    <v-card class="elevation-24" shaped color="primary" dark>
      <v-card-title>
        Tareas <v-spacer></v-spacer>
        <v-icon color="blue">note </v-icon></v-card-title
      >
    </v-card>
    <v-row cols="12" sm="8" md="4">
      <v-col>
        <v-card class="elevation-24" shaped
          ><v-app-bar>
            <v-toolbar-title>Todas las tareas</v-toolbar-title>
          </v-app-bar>

          <Calendar />

          <v-card-text>
            <h3>Son las {{ time }} del día {{ date }}</h3>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <router-view />
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
