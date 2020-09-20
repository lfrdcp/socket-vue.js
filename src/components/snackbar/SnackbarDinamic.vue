<template>
  <div class="text-center">
    <v-snackbar
      centered
      v-model="state"
      :timeout="timeout"
      :color="color"
      shaped
    >
      <p class="font-weight-thin">
        <v-icon>{{ icon }}</v-icon> {{ content }}
      </p>
      <v-progress-linear
        :value="counter"
        height="8"
        color="blue-grey lighten-5"
      ></v-progress-linear>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: 'SnackbarDinamic',
  data: () => ({
    timeout: 10000,
  }),
  props: {
    icon: { type: String, required: true },
    state: { type: Boolean, required: true, default: false },
    color: { type: String, required: true },
    content: { type: String, required: true },
    counter: { type: Number, required: true },
  },
};
</script>
