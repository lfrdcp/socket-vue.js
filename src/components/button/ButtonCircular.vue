<template>
  <div>
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          dark
          fab
          small
          class="elevation-24"
          :color="color"
          :to="{ path: link }"
        >
          <v-icon>{{ icon }} </v-icon>
        </v-btn>
      </template>
      <span>{{ tooltip }}</span>
    </v-tooltip>
  </div>
</template>

<script>
export default {
  name: 'ButtonCircular',
  props: {
    tooltip: String,
    color: String,
    icon: String,
    link: String,
  },
};
</script>
