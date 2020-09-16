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
import { rules } from '../../../utils/components/rules';
import { icons } from '../../../data/icons';
import ButtonCircular from '../../button/ButtonCircular';
import Alert from '../../alert/Alert';
import ProgressLinear from '../../progressLinear/ProgressLinear';

import axios from 'axios';
import { URL } from '../../../data/url';
import { convertObjectErrors } from '../../../utils/convertObjectErrors';
import { errorMsgEmployee } from '../../../data/errors';
import { successMsgEmployee } from '../../../data/sucess';

export default {
  name: 'EmployeeCreate',

  components: {
    ButtonCircular,
    Alert,
    ProgressLinear,
  },

  data: () => ({
    createLoading: false,
    createSuccessMsg: false,
    createServerMsg: false,
    createErrorMsg: false,

    valid: true,
    icons: icons,
    emailRules: [rules.empty, rules.email],

    employee: {
      email: '',
    },
  }),

  methods: {
    async employeeCreate() {
      this.createLoading = true;

      try {
        let response = await axios.post(
          URL + 'api/user/employee',
          this.employee
        );
        if (response.data.status === '') {
          this.$store.commit('employee/setAddEmployee', this.employee);
          this.createSuccessMsg = successMsgEmployee.created; // CÓDIGO CORRECTO ✅
          setTimeout(() => (this.createSuccessMsg = false), 10000);
        } else if (response.data.status === '1F4usu0') {
          this.createServerMsg = errorMsgEmployee.createServer; // CÓDIGO ERRONEO DE LÓGICA 🔥
        } else if (response.data.errors) {
          let errors = convertObjectErrors(response.data.errors); // CREDENCIALES INCORRECTAS ❌
          this.createServerMsg = errors;
        }
      } catch (error) {
        // ERROR EN EL SERVIDOR 🔥
        if (error.response.status === 404) {
          this.createErrorMsg = errorMsgEmployee.create404;
        } else if (error.response.status === 500) {
          this.createErrorMsg = errorMsgEmployee.create500;
        } else {
          this.createErrorMsg = errorMsgEmployee.createUn;
        }
        setTimeout(() => (this.createErrorMsg = ''), 10000);
      } finally {
        this.createLoading = false;
      }
    },
  },
};
</script>
