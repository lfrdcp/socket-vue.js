<template>
  <h1>{{ timestamp }}</h1>
</template>

<script>
export default {
  data: () => ({
    timestamp: "",
  }),
  created() {
    setInterval(this.getNow, 1000);
  },
  methods: {
    getNow: function() {
      const today = new Date();
      const time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      this.timestamp = time;
    },
  },
};
</script>
