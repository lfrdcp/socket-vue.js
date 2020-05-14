<template>
  <div class="text-center">
    <v-snackbar top right :value="snackbar" :color="color" :timeout="timeout">
      {{ text }}
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: "Snackbar",
  data: () => ({
    timeout: 8000,
  }),
  props: {
    snackbar: Boolean,
    color: String,
    text: String,
  },
  computed: {
    snackbarJson: function() {
      return JSON.parse(this.snackbar);
    },
  },
};
</script>
