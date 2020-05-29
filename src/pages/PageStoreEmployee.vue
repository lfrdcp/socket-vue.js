<template>
  <v-container>
    <v-card class="elevation-24" shaped>
      <v-toolbar>
        <v-toolbar-title>
          Configuración de la tienda y empleados
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-icon>{{ icons.employee }} </v-icon>
      </v-toolbar>
    </v-card>

    <v-row cols="12" sm="8" md="4">
      <v-col>
        <router-view name="a"></router-view>
      </v-col>

      <v-col>
        <router-view name="b"></router-view>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { icons } from '../data/icons';
export default {
  name: 'PageSoreEmployee',
  data: () => ({ icons: icons }),
};
</script>
