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

          <v-divider></v-divider>
          <br /><br />
          <v-row align="center" justify="center">
            <v-col>
              <v-btn block color="primary" to="/login">Iniciar sesion </v-btn>
            </v-col>

            <v-col>
              <v-btn block dark to="/register">Registrarse </v-btn>
            </v-col>
          </v-row>
          <br /><br />
          <v-divider></v-divider>

          <v-container class="text-center">
            <h3 align="center" justify="center">
              Punto de venta desarrollado por:
            </h3>
            <v-img
              :src="require(`../assets/BoxcodeLogo.png`)"
              aspect-ratio="6"
              contain
            />
          </v-container>
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
