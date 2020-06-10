<template>
  <v-container fluid>
    <v-card class="elevation-24" shaped>
      <v-toolbar dark>
        <v-toolbar-title>Tareas para hoy</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-icon>{{ icons.task }} </v-icon>
        <ButtonAbsolute tooltip="Crear" color="primary" :icon="icons.create" />
      </v-toolbar>
      <v-card-text>
        <v-timeline :dense="$vuetify.breakpoint.smAndDown">
          <TimeLine
            v-bind:img="false"
            titulo="Pagar pepsi"
            contenido="llegara a las 5:30 aprox, $930"
            id="100"
            color="blue"
          /><TimeLine
            v-bind:img="false"
            titulo="Pagar coca cola"
            contenido="Llegara a las 8:30 aprox, $560"
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
import { icons } from '../../data/icons';
import ButtonAbsolute from '../button/ButtonAbsolute';
export default {
  name: 'TaskRead',
  data: () => ({ icons: icons }),
  components: {
    TimeLine,
    ButtonAbsolute,
  },
};
</script>
