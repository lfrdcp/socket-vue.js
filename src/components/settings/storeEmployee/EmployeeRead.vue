<template>
  <v-card class="elevation-24" shaped>
    <v-toolbar dark>
      <v-toolbar-title>Empleados</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon>{{ icons.employee }} </v-icon>
    </v-toolbar>

    <v-card-text>
      <EmployeeCreate />
      <v-list>
        <v-row v-for="(item, i) in employees" :key="i">
          <v-col>
            <ListItem
              :title="item.email"
              subtitle="Correo"
              :icon="icons.employee"
            />
          </v-col>
          <v-col class="text-end">
            <!-- <ButtonCircular color="orange" :icon="icons.update" link="" /> -->
            <ButtonCircular
              @click.native="employeeDelete"
              tooltip="Eliminar"
              color="red"
              :icon="icons.delete"
              link=""
            />
          </v-col>
        </v-row>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';
import { icons } from '../../../data/icons';
import ButtonCircular from '../../button/ButtonCircular';
import ListItem from '../../listItem/ListItem';
import EmployeeCreate from './EmployeeCreate';
export default {
  name: 'EmployeeRead',
  components: {
    ButtonCircular,
    ListItem,
    EmployeeCreate,
  },
  data: () => ({
    icons: icons,
  }),
  computed: {
    ...mapState('employee', ['employees']),
  },
  methods: {
    employeeDelete() {
      alert('Eliminar empleado');
    },
  },
};
</script>
