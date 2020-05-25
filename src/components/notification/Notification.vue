<template>
  <v-badge :content="notifications" :value="notifications" overlap bottom left>
    <v-icon>notifications_active</v-icon>
  </v-badge>
</template>

<script>
export default {
  name: 'Dashboard',
  data: () => ({
    notifications: 10,
  }),
};
</script>
