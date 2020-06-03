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
        <v-card-title>
          <SvgComponent :content="arbolsvg" />

          <v-btn
            dark
            fab
            small
            class="elevation-24"
            color="orange"
            :to="{ path: '' }"
          >
            <v-icon>{{ icons.update }} </v-icon> </v-btn
          ><v-btn
            dark
            fab
            small
            class="elevation-24"
            color="red"
            :to="{ path: '' }"
          >
            <v-icon>{{ icons.delete }} </v-icon>
          </v-btn>

          <v-spacer></v-spacer>

          <div class="pl-12 pt-12">Ali Conners</div>
        </v-card-title>

        <v-list two-line>
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="indigo">mdi-phone</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>(650) 555-1234</v-list-item-title>
              <v-list-item-subtitle>Mobile</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-icon>
              <v-icon>mdi-message-text</v-icon>
            </v-list-item-icon>
          </v-list-item>

          <v-list-item>
            <v-list-item-action></v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>(323) 555-6789</v-list-item-title>
              <v-list-item-subtitle>Work</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-icon>
              <v-icon>mdi-message-text</v-icon>
            </v-list-item-icon>
          </v-list-item>

          <v-divider inset></v-divider>

          <v-list-item>
            <v-list-item-icon>
              <v-icon color="indigo">mdi-email</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>aliconnors@example.com</v-list-item-title>
              <v-list-item-subtitle>Personal</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-action></v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>ali_connors@example.com</v-list-item-title>
              <v-list-item-subtitle>Work</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider inset></v-divider>

          <v-list-item>
            <v-list-item-icon>
              <v-icon color="indigo">mdi-map-marker</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>1400 Main Street</v-list-item-title>
              <v-list-item-subtitle>Orlando, FL 79938</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-card-text>
  </v-card>
</template>

<script>
import { arbol } from '../../../data/svg';
import { icons } from '../../../data/icons';
import SvgComponent from '../../svg/SvgComponent';
export default {
  name: 'StoreRead',
  components: {
    SvgComponent,
  },
  data: () => ({
    items: ['Tienda 1', 'Tienda 2', 'Tienda 3', 'Tienda 4'],
    arbolsvg: arbol,
    icons: icons,
  }),
};
</script>
