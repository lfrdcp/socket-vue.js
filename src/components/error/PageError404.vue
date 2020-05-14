<template>
  <v-content>
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-24" shaped>
            <v-toolbar color="primary" dark>
              <v-toolbar-title>Error</v-toolbar-title>
            </v-toolbar>
            <v-card-title primary-title>
              La página que intentas buscar no se encontro
            </v-card-title>
            <v-card-text>
              <v-img
                :src="require('../../assets/img/404.png')"
                aspect-ratio="1"
                contain
              />
            </v-card-text>
            <v-card-actions>
              <v-btn to="/inicio" block dark>Regresar</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>
<script>
export default {
  name: "PageError404",
};
</script>
