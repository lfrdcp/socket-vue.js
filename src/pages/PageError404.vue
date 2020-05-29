<template>
  <v-content>
    <v-container>
      <v-row align="center" justify="center">
        <v-container>
          <v-btn to="/inicio" block dark>Regresar</v-btn></v-container
        >
        <h1>
          La página que intentas buscar no se encontro
        </h1>
        <NotFound />
      </v-row>
    </v-container>
  </v-content>
</template>
<script>
import NotFound from '../assets/img/NotFound.svg';
export default {
  name: 'PageError404',
  components: {
    NotFound,
  },
};
</script>
