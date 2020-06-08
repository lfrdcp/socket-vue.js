<template>
  <v-card v-if="update">
    <h1>actualizar tiendas</h1>
    <v-btn small @click="update = false">Normal</v-btn>
  </v-card>
</template>

<script>
export default {
  name: 'StoreUpdate',
  props: {
    update: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
