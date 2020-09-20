<template>
  <v-card class="elevation-24" shaped>
    <v-toolbar dark>
      <v-toolbar-title>Tiendas</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon>{{ icons.store }} </v-icon>
      <ButtonAbsolute
        tooltip="Crear"
        @click.native="create()"
        color="primary"
        :icon="icons.create"
      />
    </v-toolbar>

    <v-card-text>
      <v-container>
        <v-select :items="items" label="Seleccione una tienda" outlined />

        <v-card>
          <v-toolbar dark>
            <v-toolbar-title>Tienda 1</v-toolbar-title>
          </v-toolbar>
          <!-- <a href="https://www.freepik.es/vectores/fondo"
            >Vector de Fondo creado por freepik - www.freepik.es</a
          > -->

          <ListItem :icon="icons.location" title="Dirección" />

          <v-divider inset />
          <v-row>
            <v-col>
              <ListItem title="Zempoala" subtitle="Calle" />
              <ListItem title="30" subtitle="No. interior" />
              <ListItem title="25" subtitle="No. exterior" />
            </v-col>
            <v-col>
              <ListItem title="Flor" subtitle="Colonia" />
              <ListItem title="Cuernavaca" subtitle="Ciudad" />
              <ListItem title="Morelos" subtitle="Estado" />
            </v-col>
          </v-row>
        </v-card>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <ButtonCircular
        tooltip="Editar"
        @click.native="update()"
        color="orange"
        :icon="icons.update"
        link=""
      />
      <DialogConfirmClose
        color="red"
        title="¿Estas seguro de elimiar la tienda?"
        content="Una vez eliminada la tienda, no se podra recuperar"
        textButtonConfirm="Eliminar tienda"
        textButtonClose="Cancelar"
        :icon="icons.delete"
        :parentMethod="exampleAlert"
        tooltip="Eliminar tienda"
      />
    </v-card-actions>
  </v-card>
</template>

<script>
import { icons } from '../../../data/icons';
import ButtonCircular from '../../button/ButtonCircular';
import ListItem from '../../listItem/ListItem';
import ButtonAbsolute from '../../button/ButtonAbsolute';
import DialogConfirmClose from '../../dialog/DialogConfirmClose';

export default {
  name: 'StoreRead',
  components: {
    ButtonCircular,
    ListItem,
    ButtonAbsolute,
    DialogConfirmClose,
  },
  data: () => ({
    items: ['Tienda 1', 'Tienda 2', 'Tienda 3', 'Tienda 4'],

    icons: icons,
  }),

  methods: {
    exampleAlert() {
      alert('Eliminar tienda');
    },
    update() {
      this.$store.commit('store/setCRUDButton', 'U');
    },
    create() {
      this.$store.commit('store/setCRUDButton', 'C');
    },
  },
};
</script>
<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
</style>
