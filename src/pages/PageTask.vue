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
        <transition mode="out-in">
          <TaskCreate v-if="CRUDButton === 'C'" />
          <TaskRead v-else-if="CRUDButton === 'R'" />
          <TaskUpdate v-else-if="CRUDButton === 'U'" />
        </transition>
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
import { mapState } from 'vuex';
import Calendar from '../components/calendar/Calendar';
import TaskRead from '../components/task/TaskRead';
import TaskUpdate from '../components/task/TaskUpdate';
import TaskCreate from '../components/task/TaskCreate';
import { icons } from '../data/icons';

export default {
  name: 'Home',
  data: () => ({ time: '', date: '', icons: icons }),
  components: {
    Calendar,
    TaskRead,
    TaskUpdate,
    TaskCreate,
  },
  created() {
    setInterval(this.getNow, 1000);
  },
  computed: {
    ...mapState('task', ['CRUDButton']),
  },
};
</script>
<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.1s;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
</style>
