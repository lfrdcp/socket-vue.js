<template>
  <v-container>
    <v-card class="elevation-24" shaped>
      <v-card-title>
        Tareas para hoy <v-spacer></v-spacer>
        <v-icon color="blue">note </v-icon></v-card-title
      >
    </v-card>
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
  </v-container>
</template>

<script>
import TimeLine from "../timeLine/TimeLine";
export default {
  name: "Task",
  components: {
    TimeLine,
  },
};
</script>
