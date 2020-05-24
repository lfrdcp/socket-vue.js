<template>
  <div>
    <v-alert :color="color" :icon="icono" border="left" prominent>
      {{ texto }}
    </v-alert>
  </div>
</template>
<script>
export default {
  name: 'Alert',
  props: ['color', 'texto', 'icono'],
};
</script>
