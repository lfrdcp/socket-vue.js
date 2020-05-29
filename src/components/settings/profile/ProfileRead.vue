<template>
  <v-card class="elevation-24 text-center" shaped>
    <v-toolbar dark>
      <v-toolbar-title>Datos actuales</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon>event</v-icon>
    </v-toolbar>
    <v-card-text>
      <v-col cols="12">
        <v-avatar class="profile" size="164">
          <v-img
            src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
          ></v-img>
        </v-avatar>
      </v-col>
      <v-chip
        class="ma-2"
        close
        color="green"
        text-color="white"
        close-icon="mdi-delete"
      >
        <v-avatar left>
          <v-icon>check</v-icon>
        </v-avatar>
        Cuenta activada
      </v-chip>
      <v-simple-table>
        <template>
          <tbody>
            <tr>
              <th class="text-right">Nombre</th>
              <td class="text-left">{{ user.name }}</td>
            </tr>
            <tr>
              <th class="text-right">Rol</th>
              <td class="text-left" v-if="user.type === 0">Administrador</td>
              <td class="text-left" v-else-if="user.type === 1">Empleado</td>
            </tr>
            <tr>
              <th class="text-right">Correo</th>
              <td class="text-left">{{ user.email }}</td>
            </tr>
            <tr>
              <th class="text-right">Proxima fecha de pago</th>
              <td class="text-left">06/06/2020</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'PersonalShow',
  computed: {
    ...mapState('currentUser', ['user']),
  },
};
</script>
