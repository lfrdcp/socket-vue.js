<template>
  <v-timeline-item hide-dot fill-dot dark>
    <v-card class="elevation-24" shaped>
      <v-card-title :class="color">
        {{ titulo }}
      </v-card-title>

      <v-card-text>
        <v-container>
          {{ contenido }}
        </v-container>
      </v-card-text>

      <v-card-actions>
        <ButtonCircular
          @click.native="update()"
          tooltip="Editar"
          color="orange"
          :icon="icons.update"
          link=""
        />
        <ButtonCircular
          tooltip="Eliminar"
          color="red"
          :icon="icons.delete"
          link=""
        />
      </v-card-actions>
    </v-card>
  </v-timeline-item>
</template>
<script>
import ButtonCircular from '../button/ButtonCircular';
import { icons } from '../../data/icons';
export default {
  name: 'TimeLine',
  props: ['id', 'titulo', 'contenido', 'color', 'img', 'nombreImg'],
  components: {
    ButtonCircular,
  },
  data: () => ({
    icons: icons,
  }),
  methods: {
    update() {
      this.$store.dispatch('task/setUpCRUDButton', 'U');
    },
  },
};
</script>

<style>
/* This is for documentation purposes and will not be needed in your application */
#create .v-speed-dial {
  position: absolute;
}

#create .v-btn--floating {
  position: relative;
}
</style>
