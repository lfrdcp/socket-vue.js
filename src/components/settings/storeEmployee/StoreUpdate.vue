<template>
  <v-card>
    <h1>actualizar tiendas</h1>
    <v-btn small @click="update()">Normal</v-btn>
  </v-card>
</template>

<script>
export default {
  name: 'StoreUpdate',

  methods: {
    update() {
      this.$store.dispatch('store/setUpCRUDButton', 'R');
    },
  },
};
</script>
