<template>
  <v-card class="elevation-24" @keyup.esc="logout()">
    <v-app-bar app clipped-left dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" mensaje-tour="4" />
      <v-toolbar-title>Punto de venta boxcode</v-toolbar-title>
      <v-spacer></v-spacer>
      <DialogNotifications v-bind:notifications="2" />

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon @click="logout()" v-bind="attrs" v-on="on">
            <v-icon>{{ icons.power }}</v-icon>
          </v-btn>
        </template>
        <span>Cerrar sesion</span>
      </v-tooltip>
    </v-app-bar>
    <v-navigation-drawer
      dark
      v-model="drawer"
      app
      clipped
      class="elevation-24"
      mensaje-tour="1"
    >
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img :src="user.img" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ user.name }}</v-list-item-title>
            <v-list-item-subtitle v-if="user.type === 0">
              Administrador
            </v-list-item-subtitle>
            <v-list-item-subtitle v-else-if="user.type === 1">
              Empleado
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
      <v-divider></v-divider>

      <v-list dense>
        <ListItemSingle link="/inicio" :icon="icons.home" text="Inicio" />

        <v-list-group no-action :prepend-icon="icons.settings" color="white">
          <template v-slot:activator>
            <v-list-item-content mensaje-tour="2">
              <v-list-item-title>Configuración</v-list-item-title>
            </v-list-item-content>
          </template>

          <ListItemGroup
            link="/profile"
            :icon="icons.fingerprint"
            text="Perfil"
          />

          <ListItemGroup
            link="/storeEmployee"
            :icon="icons.storeEmployee"
            text="Tienda/Empleado"
          />
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';
import ListItemSingle from './ListItemSingle';
import ListItemGroup from './ListItemGroup';
import DialogNotifications from '../dialog/DialogNotifications';
import { icons } from '../../data/icons';
import router from '../../router/index';

export default {
  name: 'Dashboard',
  data: () => ({ icons: icons, drawer: null, time: '', date: '' }),
  components: {
    ListItemSingle,
    ListItemGroup,
    DialogNotifications,
  },
  created() {
    setInterval(() => {
      this.time = new Date().toLocaleTimeString();
      this.date = new Date().toLocaleDateString();
    }, 1000);
  },
  computed: {
    ...mapState('user', ['user']),
  },
  methods: {
    logout() {
      localStorage.removeItem('blog_token');
      router.push('/login');
    },
  },
};
</script>
