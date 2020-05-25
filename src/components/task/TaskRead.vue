<template>
  <v-container fluid>
    <v-card class="elevation-24" shaped>
      <v-toolbar dark>
        <v-toolbar-title>Tareas para hoy</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-icon>note </v-icon>
        <v-btn color="primary" dark small absolute bottom left fab>
          <v-icon>add</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <v-timeline :dense="$vuetify.breakpoint.smAndDown">
          <TimeLine
            v-bind:img="false"
            titulo="Pagar bimbo alfredo castañeda"
            contenido="llegara a las 5:30 aprox"
            id="100"
            color="blue"
          /><TimeLine
            v-bind:img="false"
            titulo="Pagar bimbo"
            contenido="llegara a las 5:30 aprox"
            id="200"
            color="blue"
          />
        </v-timeline>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import TimeLine from '../timeLine/TimeLine';
export default {
  name: 'TaskRead',
  components: {
    TimeLine,
  },
};
</script>
