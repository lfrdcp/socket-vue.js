<template>
  <v-content>
    <v-container>
      <v-progress-linear
        striped
        :active="loading"
        :indeterminate="loading"
        absolute
        bottom
        :color="color"
      ></v-progress-linear>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "ProgressLinear",
  props: {
    loading: Boolean,
    color: String,
  },
};
</script>
