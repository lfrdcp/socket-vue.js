<template>
  <v-card class="elevation-24" shaped>
    <v-toolbar color="primary" dark>
      <v-toolbar-title>Crear tarea</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon>{{ icons.task }} </v-icon>
    </v-toolbar>

    <v-card-text>
      <v-form v-model="valid">
        <v-text-field
          label="Titulo"
          name="titulo"
          :prepend-icon="icons.title"
          outlined
          color="primary"
          required
        />
        <v-text-field
          label="Descripción"
          name="descripcion"
          :prepend-icon="icons.description"
          outlined
          color="primary"
          required
        />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn
        block
        color="primary"
        @click="create"
        type="submit"
        :disabled="!valid"
        >Crear</v-btn
      >
    </v-card-actions>
  </v-card>
</template>
<script>
import { icons } from '../../data/icons';

export default {
  name: 'TaskCreate',
  data: () => ({
    valid: false,
    icons: icons,
  }),

  methods: {
    create() {
      this.$store.dispatch('task/setUpCRUDButton', 'R');
    },
  },
};
</script>
