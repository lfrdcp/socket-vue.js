<template>
  <v-card v-if="update">
    <h1>actualizar tiendas</h1>
    <v-btn small @click="update()">Normal</v-btn>
  </v-card>
</template>

<script>
export default {
  name: 'StoreUpdate',

  methods: {
    update() {
      this.$store.dispatch('store/setUpUpdateButton');
    },
  },
};
</script>
