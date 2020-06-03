<template>
  <v-card class="elevation-24" shaped>
    <v-toolbar dark>
      <v-toolbar-title>Empleados</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon>{{ icons.employee }} </v-icon>
    </v-toolbar>
  </v-card>
</template>

<script>
import { icons } from '../../../data/icons';

export default {
  name: 'EmployeeRead',
  components: {},
  data: () => ({
    icons: icons,
  }),
};
</script>
