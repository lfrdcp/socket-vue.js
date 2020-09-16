<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on">
        <v-badge
          :content="notifications"
          :value="notifications"
          overlap
          bottom
          left
        >
          <v-icon>{{ icons.notification }}</v-icon>
        </v-badge>
      </v-btn>
    </template>
    <span>Notificaciones</span>
  </v-tooltip>
</template>

<script>
import { icons } from '../../data/icons';
export default {
  name: 'Dashboard',
  data: () => ({
    icons: icons,
  }),
  props: {
    notifications: { type: Number },
  },
};
</script>
