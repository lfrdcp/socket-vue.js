<template>
  <v-card class="elevation-24" shaped>
    <v-toolbar dark>
      <v-toolbar-title>Tiendas</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon>{{ icons.store }} </v-icon>
    </v-toolbar>

    <v-card-text>
      <v-select
        :items="items"
        label="Seleccione una tienda"
        outlined
      ></v-select>

      <v-card shaped>
        <SvgComponent :content="arbolsvg" />
        <v-card-title>
          Tienda 1
        </v-card-title>

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
        <v-card-actions>
          <ButtonCircular color="orange" :icon="icons.update" link="" />
          <ButtonCircular color="red" :icon="icons.delete" link="" />
        </v-card-actions>
      </v-card>
    </v-card-text>
  </v-card>
</template>

<script>
import { arbol } from '../../../data/svg';
import { icons } from '../../../data/icons';
import SvgComponent from '../../svg/SvgComponent';
import ButtonCircular from '../../button/ButtonCircular';
import ListItem from '../../listItem/ListItem';
export default {
  name: 'StoreRead',
  components: {
    SvgComponent,
    ButtonCircular,
    ListItem,
  },
  data: () => ({
    items: ['Tienda 1', 'Tienda 2', 'Tienda 3', 'Tienda 4'],
    arbolsvg: arbol,
    icons: icons,
  }),
};
</script>
