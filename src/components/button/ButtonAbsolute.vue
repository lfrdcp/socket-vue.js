<template>
  <v-btn
    :color="color"
    :to="{ path: link }"
    dark
    small
    absolute
    bottom
    left
    fab
  >
    <v-icon>{{ icon }} </v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'ButtonAbsolute',
  props: {
    color: String,
    icon: String,
    link: String,
  },
};
</script>
