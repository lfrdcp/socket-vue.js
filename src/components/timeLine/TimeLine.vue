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
          @click.native="$store.commit('task/setCRUDButton', 'U')"
          tooltip="Editar"
          color="orange"
          :icon="icons.update"
          link=""
        />

        <DialogConfirmClose
          color="red"
          title="¿Estas seguro de elimiar la tarea?"
          content="Una vez eliminada la tarea, no se podra recuperar"
          textButtonConfirm="Eliminar tarea"
          textButtonClose="Cancelar"
          :icon="icons.delete"
          :parentMethod="ejemploAlerta"
          tooltip="Eliminar tarea"
        />
      </v-card-actions>
    </v-card>
  </v-timeline-item>
</template>
<script>
import ButtonCircular from '../button/ButtonCircular';
import DialogConfirmClose from '../dialog/DialogConfirmClose';
import { icons } from '../../data/icons';

export default {
  name: 'TimeLine',

  props: {
    id: {
      type: Number,
      required: true,
      validator: (val) => !isNaN(val),
    },
    titulo: { type: String, required: true },
    contenido: { type: String, required: true },
    color: { type: String, required: true },
  },

  components: {
    ButtonCircular,
    DialogConfirmClose,
  },
  data: () => ({
    icons: icons,
  }),
  methods: {
    ejemploAlerta() {
      alert('lo hiicste');
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
