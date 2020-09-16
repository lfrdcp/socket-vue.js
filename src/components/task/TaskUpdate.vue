<template>
  <v-card class="elevation-24" shaped>
    <v-toolbar dark>
      <v-toolbar-title>Editar tarea</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon color="orange">{{ icons.task }} </v-icon>
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
        <v-textarea
          label="Descripción"
          name="descripcion"
          outlined
          color="primary"
          required
          rows="3"
          auto-grow
          :prepend-icon="icons.description"
        />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-row justify="center">
        <v-col cols="12" sm="4" md="4">
          <v-btn
            dark
            block
            color="orange"
            @click="$store.commit('task/setCRUDButton', 'R')"
            type="submit"
            :disabled="!valid"
            >Editar</v-btn
          >
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>
<script>
import { icons } from '../../data/icons';

export default {
  name: 'TaskUpdate',
  data: () => ({
    valid: false,
    icons: icons,
  }),
};
</script>
