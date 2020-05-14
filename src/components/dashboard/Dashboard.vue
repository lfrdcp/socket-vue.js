<template>
  <v-card class="elevation-24">
    <v-app-bar app clipped-left dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Punto de venta boxcode</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app clipped class="elevation-24">
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

        <v-list-item to="/inicio" link>
          <v-list-item-action>
            <v-icon>home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Inicio</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/inventory" link>
          <v-list-item-action>
            <v-icon>storefront</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Inventario</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2" @click="logout">
          <v-btn block dark>
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
export default {
  name: "Dashboard",
  data() {
    return {
      drawer: null,
    };
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
