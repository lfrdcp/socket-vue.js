<template>
  <v-btn
    dark
    fab
    small
    class="elevation-24"
    :color="color"
    :to="{ path: link }"
  >
    <v-icon>{{ icon }} </v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'ButtonCircular',
  props: {
    color: String,
    icon: String,
    link: String,
  },
};
</script>
