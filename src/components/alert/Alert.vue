<template>
  <div class="elevation-3">
    <v-alert
      dense
      prominent
      colored-border
      :color="color"
      :icon="icono"
      border="left"
    >
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
