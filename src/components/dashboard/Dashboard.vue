<template>
  <v-card class="elevation-24">
    <v-app-bar app clipped-left dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" mensaje-tour="4" />
      <v-toolbar-title>Punto de venta boxcode</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer
      dark
      v-model="drawer"
      app
      clipped
      class="elevation-24"
      mensaje-tour="1"
    >
      <v-list dense>
        <v-list-item>
          <v-list-item-action>
            <v-avatar size="36px">
              <img
                alt="Avatar"
                src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
              />
            </v-avatar>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ user.name }}</v-list-item-title>
            <v-list-item-subtitle v-if="user.type === 0">
              Administrador</v-list-item-subtitle
            >
            <v-list-item-subtitle v-else-if="user.type === 1">
              Empleado</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>

        <ListItemSingle link="/inicio" icon="home" text="Inicio" />
        <ListItemSingle link="/inventory" icon="store" text="Inventario" />

        <v-list-group no-action prepend-icon="settings" color="white">
          <template v-slot:activator>
            <v-list-item-content mensaje-tour="2">
              <v-list-item-title>Configuración</v-list-item-title>
            </v-list-item-content>
          </template>

          <ListItemGroup link="/personal" icon="fingerprint" text="Personal" />

          <ListItemGroup
            link="/storeEmployee"
            icon="assignment_ind"
            text="Tienda/Empleado"
          />
        </v-list-group>
      </v-list>

      <template v-slot:append>
        <div class="pa-2" @click="logout">
          <v-btn block dark mensaje-tour="3">
            <v-icon>power_settings_new </v-icon>
            <v-spacer></v-spacer>
            Cerrar sesion
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';
import ListItemSingle from './ListItemSingle';
import ListItemGroup from './ListItemGroup';

export default {
  name: 'Dashboard',
  data: () => ({
    drawer: null,
    admins: [
      ['Management', 'people_outline'],
      ['Settings', 'settings'],
    ],
  }),
  components: {
    ListItemSingle,
    ListItemGroup,
  },
  computed: {
    ...mapState('currentUser', ['user']),
  },

  methods: {
    logout() {
      this.$store.dispatch('currentUser/logoutUser');
    },
  },
};
</script>
