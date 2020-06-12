<template>
  <v-card class="elevation-24" shaped>
    <v-toolbar color="orange" dark>
      <v-toolbar-title>Editar tarea</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon>{{ icons.task }} </v-icon>
    </v-toolbar>
    <v-card-title>
      Editar tarea
    </v-card-title>
    <v-card-text>
      <v-form v-model="valid">
        <v-text-field
          label="Titulo"
          name="titulo"
          prepend-icon="person"
          outlined
          color="primary"
          required
        />
        <v-text-field
          label="Descripción"
          name="descripcion"
          prepend-icon="person"
          outlined
          color="primary"
          required
        />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <ButtonCircular
        @click.native="update()"
        tooltip="Editar"
        color="primary"
        :icon="icons.check"
        link=""
      />
    </v-card-actions>
  </v-card>
</template>
<script>
import { icons } from '../../data/icons';
import ButtonCircular from '../button/ButtonCircular';
export default {
  name: 'TaskUpdate',
  data: () => ({
    valid: false,
    icons: icons,
  }),
  components: {
    ButtonCircular,
  },
  methods: {
    update() {
      this.$store.dispatch('task/setUpCRUDButton', 'R');
    },
  },
};
</script>
