<template>
  <v-container>
    <v-card class="elevation-24" shaped>
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
        <v-btn
          small
          absolute
          dark
          fab
          top
          right
          color="primary"
          link
          to="/inicio"
        >
          <v-icon>done</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: 'TaskUpdate',
};
</script>
