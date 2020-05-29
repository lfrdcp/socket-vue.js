<template>
  <v-badge :content="notifications" :value="notifications" overlap bottom left>
    <v-icon>{{ icons.notification }}</v-icon>
  </v-badge>
</template>

<script>
import { icons } from '../../data/icons';
export default {
  name: 'Dashboard',
  data: () => ({
    notifications: 10,
    icons: icons,
  }),
};
</script>
