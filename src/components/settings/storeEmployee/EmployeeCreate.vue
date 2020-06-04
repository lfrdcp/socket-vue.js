<template>
  <v-form v-model="valid">
    <Alert
      color="warning"
      :icono="icons.warning"
      :texto="employeeMessage"
      v-if="employeeMessage"
    />
    <Snackbar
      v-bind:snackbar="employeeSnackbar"
      text="Ha iniciado sesion de manera correcta"
      color="success"
    />
    <v-container>
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
              color="primary"
              :icon="icons.check"
              link=""
              @click.native="employeeCreate"
            />
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <ProgressLinear v-bind:loading="employeeLoading" color="primary" />
  </v-form>
</template>

<script>
import { mapState } from 'vuex';
import { rules } from '../../../utils/components/rules';
import { icons } from '../../../data/icons';
import ButtonCircular from '../../button/ButtonCircular';
import Snackbar from '../../snackbar/Snackbar';
import Alert from '../../alert/Alert';
import ProgressLinear from '../../progressLinear/ProgressLinear';
export default {
  name: 'EmployeeCreate',
  components: {
    ButtonCircular,
    Alert,
    ProgressLinear,
    Snackbar,
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
      'employeeLoading',
      'employeeMessage',
      'employeeSnackbar',
    ]),
  },
  methods: {
    employeeCreate() {
      this.$store.dispatch('employee/createEmployee', this.employee);
    },
  },
};
</script>
