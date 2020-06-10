<template>
  <v-container>
    <v-card class="elevation-24" shaped>
      <v-toolbar>
        <v-toolbar-title>Tareas</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-icon>{{ icons.task }} </v-icon>
      </v-toolbar>
    </v-card>

    <v-row cols="12" sm="8" md="4">
      <v-col>
        <TaskRead />
        <TaskUpdate />
      </v-col>
      <v-col>
        <v-card class="elevation-24" shaped>
          <v-toolbar dark>
            <v-toolbar-title>Todas las tareas</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-icon>{{ icons.task }}</v-icon>
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
import Calendar from '../components/calendar/Calendar';
import TaskRead from '../components/task/TaskRead';
import TaskUpdate from '../components/task/TaskUpdate';
import { icons } from '../data/icons';

export default {
  name: 'Home',
  data: () => ({ time: '', date: '', icons: icons }),
  components: {
    Calendar,
    TaskRead,
    TaskUpdate,
  },
  created() {
    setInterval(this.getNow, 1000);
  },
  methods: {
    getNow: function() {
      const today = new Date();
      const date =
        today.getFullYear() +
        '-' +
        (today.getMonth() + 1) +
        '-' +
        today.getDate();
      const time =
        today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
      this.time = time;
      this.date = date;
    },
  },
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
