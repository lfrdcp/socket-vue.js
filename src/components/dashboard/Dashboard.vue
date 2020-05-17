<template>
  <v-card class="elevation-24">
    <v-app-bar app clipped-left dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" mensaje-tour="4" />
      <v-toolbar-title>Punto de venta boxcode</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer
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
                src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
              />
            </v-avatar>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Perfil: {{ user.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <ListItem link="/inicio" icon="home" text="Inicio" />
        <ListItem link="/inventory" icon="storefront" text="Inventario" />

        <ListItem
          link="/settings"
          icon="settings"
          text="Configuración"
          mensaje-tour="2"
        />
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
import { mapState } from "vuex";
import ListItem from "./ListItem";
export default {
  name: "Dashboard",
  data() {
    return {
      drawer: null,
    };
  },
  components: {
    ListItem,
  },
  computed: {
    ...mapState("currentUser", ["user"]),
  },

  methods: {
    logout() {
      this.$store.dispatch("currentUser/logoutUser");
    },
  },
};
</script>
