<template>
  <v-container>
    <v-card class="elevation-24" shaped>
      <v-toolbar>
        <v-toolbar-title>
          Tienda/Empleado
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-icon>{{ icons.storeEmployee }} </v-icon>
      </v-toolbar>
    </v-card>

    <v-row cols="12" sm="8" md="4">
      <v-col>
        <v-container>
          <transition mode="out-in">
            <StoreCreate v-if="CRUDButton === 'C'" />
            <StoreRead v-else-if="CRUDButton === 'R'" />
            <StoreUpdate v-else-if="CRUDButton === 'U'" />
          </transition>
        </v-container>
      </v-col>

      <v-col>
        <EmployeeRead />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
import { icons } from '../data/icons';
import StoreCreate from '../components/settings/storeEmployee/StoreCreate';
import StoreRead from '../components/settings/storeEmployee/StoreRead';
import StoreUpdate from '../components/settings/storeEmployee/StoreUpdate';
import EmployeeRead from '../components/settings/storeEmployee/EmployeeRead';

export default {
  name: 'PageSoreEmployee',
  data: () => ({ icons: icons }),
  components: {
    StoreCreate,
    StoreRead,
    StoreUpdate,
    EmployeeRead,
  },
  computed: {
    ...mapState('store', ['CRUDButton']),
  },
};
</script>
