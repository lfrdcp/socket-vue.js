<template>
  <v-progress-linear
    :active="loading"
    :indeterminate="loading"
    :color="color"
  ></v-progress-linear>
</template>

<script>
export default {
  name: 'ProgressLinear',
  props: {
    loading: Boolean,
    color: String,
  },
};
</script>
