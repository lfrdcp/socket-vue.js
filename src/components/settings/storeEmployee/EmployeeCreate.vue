<template>
  <v-form v-model="valid">
    <v-container>
      <Alert
        color="success"
        :icono="icons.check"
        :texto="createSuccessMsg"
        v-if="createSuccessMsg"
      />
      <Alert
        color="warning"
        :icono="icons.warning"
        :texto="createServerMsg"
        v-if="createServerMsg"
      />
      <Alert
        color="error"
        :icono="icons.error"
        :texto="createErrorMsg"
        v-if="createErrorMsg"
      />
      <v-row>
        <v-col cols="9" md="11">
          <v-text-field
            label="Ingrese correo de empleado"
            name="email"
            :prepend-icon="icons.person"
            type="email"
            outlined
            color="primary"
            required
            :rules="emailRules"
            v-model="employee.email"
          />
        </v-col>
        <v-col cols="3" md="1">
          <v-btn fab small :disabled="!valid">
            <ButtonCircular
              tooltip="Crear"
              color="primary"
              :icon="icons.check"
              link=""
              @click.native="employeeCreate"
            />
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <ProgressLinear v-bind:loading="createLoading" color="primary" />
  </v-form>
</template>

<script>
import { mapState } from 'vuex';
import { rules } from '../../../utils/components/rules';
import { icons } from '../../../data/icons';
import ButtonCircular from '../../button/ButtonCircular';

import Alert from '../../alert/Alert';
import ProgressLinear from '../../progressLinear/ProgressLinear';
export default {
  name: 'EmployeeCreate',
  components: {
    ButtonCircular,
    Alert,
    ProgressLinear,
  },
  data: () => ({
    valid: true,
    icons: icons,
    emailRules: [rules.empty, rules.email],

    employee: {
      email: '',
    },
  }),
  computed: {
    ...mapState('employee', [
      'createLoading',
      'createServerMsg',
      'createSuccessMsg',
      'createErrorMsg',
    ]),
  },
  methods: {
    employeeCreate() {
      this.$store.dispatch('employee/create', this.employee);
    },
  },
};
</script>
