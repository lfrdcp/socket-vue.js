<template>
  <v-card class="elevation-24" shaped>
    <v-toolbar dark>
      <v-toolbar-title>Tareas para hoy</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon>{{ icons.task }} </v-icon>
      <ButtonAbsolute
        @click.native="$store.commit('task/setCRUDButton', 'C')"
        tooltip="Crear"
        color="primary"
        :icon="icons.create"
      /><ButtonAbsolute
        @click.native="$store.commit('task/setCRUDButton', 'C')"
        tooltip="Crear"
        color="primary"
        :icon="icons.create"
      />
    </v-toolbar>

    <v-card-text>
      <h1>{{ mensaje }}</h1>
      <v-timeline :dense="$vuetify.breakpoint.smAndDown">
        <TimeLine
          v-for="task in tasks"
          :key="task.id"
          :titulo="task.title"
          :contenido="task.description"
          :id="task.id"
          color="primary"
        />
      </v-timeline>
    </v-card-text>
    <v-container>
      <ProgressLinear v-bind:loading="loginLoading" color="primary" />
    </v-container>

    <SnackbarDinamic
      :counter="timerCount"
      :icon="snackbarIcon"
      :state="snackbarState"
      :color="snackbarColor"
      :content="snackbarContent"
    />
  </v-card>
</template>

<script>
import TimeLine from '../timeLine/TimeLine';
import { icons } from '../../data/icons';
import ButtonAbsolute from '../button/ButtonAbsolute';
import ProgressLinear from '../progressLinear/ProgressLinear';
import axios from 'axios';
import { URL } from '../../data/url';
import SnackbarDinamic from '../snackbar/SnackbarDinamic';
import { errorMsgTasks } from '../../data/errors';
import { mixinSnackbar } from '../../mixins/mixins.js';

import Echo from 'laravel-echo';

export default {
  name: 'TaskRead',
  mixins: [mixinSnackbar],
  components: {
    TimeLine,
    ButtonAbsolute,
    SnackbarDinamic,
    ProgressLinear,
  },
  data: () => ({
    Echo: Echo,
    icons: icons,
    tasks: [],
    snackbarIcon: '',
    snackbarState: false,
    snackbarColor: '',
    snackbarContent: '',
    timerCount: 100,
    loginLoading: '',
    mensaje: [],
  }),

  mounted() {
    this.setTasks();

    window.Echo = new Echo({
      broadcaster: 'pusher',
      key: '085553fa518ea5fefd0e',
      wsHost: '192.168.0.103',
      wsPort: 6001,
      disableStats: true,
      forceTLS: false,
    });

    window.Echo.channel('DemoChannel').listen('WebsocketDemoEvent', (e) => {
      this.mensaje.push(e.somedata);
      console.log(e);
    });

    // this.echo.connector.pusher.connection.bind('connected', (event) =>
    //   console.log(event)
    // );

    // console.log('ya paso por el codigo de canal');
  },
  methods: {
    async setTasks() {
      try {
        this.loginLoading = true;
        let response = await axios.post(URL + 'api/user/tasks', {
          nameStoreDataBase: 'tienda1_dev',
        });
        this.tasks = response.data.tasks;
      } catch (error) {
        if (error.response.status === 404) {
          this.setSnackbar(this.icons.error, 'red', errorMsgTasks.readTask404);
        } else if (error.response.status === 500) {
          this.setSnackbar(this.icons.error, 'red', errorMsgTasks.readTask500);
        } else {
          this.setSnackbar(this.icons.error, 'red', errorMsgTasks.readTaskUn);
        }
      } finally {
        this.loginLoading = false;
      }
    },
  },
};
</script>
