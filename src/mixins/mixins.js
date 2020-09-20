export const mixinSnackbar = {
  data: () => ({
    timerCount: 100,
  }),
  watch: {
    timerCount: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.timerCount -= 10;
          }, 1000);
        }
      },
      immediate: true,
    },
  },
  methods: {
    setSnackbar(icon, color, content) {
      this.snackbarState = true;
      this.snackbarIcon = icon;
      this.snackbarColor = color;
      this.snackbarContent = content;
    },
  },
};
