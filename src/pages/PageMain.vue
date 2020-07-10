<template>
  <v-content>
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-img
            :src="require(`../assets/img/posbc.png`)"
            aspect-ratio="1.5"
            contain
          />

          <h2 align="center" justify="center">
            Punto de venta desarrollado por boxcode
          </h2>
          <br />
          <v-divider></v-divider>
          <br />

          <v-row align="center" justify="center">
            <v-col>
              <v-btn block color="primary" to="/login">Iniciar sesion </v-btn>
            </v-col>

            <v-col>
              <v-btn block color="primary" to="/register">Registrarse </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: 'PageMain',
};
</script>
