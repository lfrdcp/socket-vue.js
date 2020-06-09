<template>
  <v-container>
    <StoreCreate />
    <transition>
      <StoreUpdate v-if="updateButton" />

      <v-card class="elevation-24" shaped v-else>
        <v-toolbar dark>
          <v-toolbar-title>Tiendas</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-icon>{{ icons.store }} </v-icon>
        </v-toolbar>

        <v-card-text>
          <v-select :items="items" label="Seleccione una tienda" outlined />
          <h3>Tienda 1</h3>
          <SvgComponent :content="arbolsvg" />
          <v-list two-line>
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
          </v-list>
          <ButtonCircular
            @click.native="update()"
            color="orange"
            :icon="icons.update"
            link=""
          />
          <ButtonCircular color="red" :icon="icons.delete" link="" />
        </v-card-text>
      </v-card>
    </transition>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
import { arbol } from '../../../data/svg';
import { icons } from '../../../data/icons';
import SvgComponent from '../../svg/SvgComponent';
import ButtonCircular from '../../button/ButtonCircular';
import ListItem from '../../listItem/ListItem';
import StoreCreate from './StoreCreate';
import StoreUpdate from './StoreUpdate';

export default {
  name: 'StoreRead',
  components: {
    SvgComponent,
    ButtonCircular,
    ListItem,
    StoreCreate,
    StoreUpdate,
  },
  data: () => ({
    items: ['Tienda 1', 'Tienda 2', 'Tienda 3', 'Tienda 4'],
    arbolsvg: arbol,
    icons: icons,
  }),
  computed: {
    ...mapState('store', ['updateButton']),
  },
  methods: {
    update() {
      this.$store.dispatch('store/setUpUpdateButton');
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
