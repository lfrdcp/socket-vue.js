<template>
  <v-card class="elevation-24" shaped>
    <v-toolbar dark>
      <v-toolbar-title>Editar datos</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon color="orange">{{ icons.update }} </v-icon>
    </v-toolbar>

    <v-card-text>
      <v-form v-model="valid">
        <Alert
          color="success"
          :icono="icons.check"
          :texto="updateSuccessMsg"
          v-if="updateSuccessMsg"
        />
        <Alert
          color="warning"
          :icono="icons.warning"
          :texto="updateServerMsg"
          v-if="updateServerMsg"
        />
        <Alert
          color="error"
          icono="error"
          :texto="updateErrorMsg"
          v-if="updateErrorMsg"
        />
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <v-switch
                inset
                v-model="swtichs.switchImg"
                label="Foto de perfil"
              />
            </v-col>

            <v-col cols="12" md="4" v-if="swtichs.switchImg">
              <v-select
                :prepend-icon="icons.image"
                item-text="text"
                item-value="value"
                :items="optionsImg"
                label="Seleccione opción"
                outlined
                v-model="swtichs.switchImgOption"
              ></v-select>
            </v-col>
            <v-col cols="12" md="4" v-if="swtichs.switchImg">
              <v-container>
                <DialogImageProfile v-if="swtichs.switchImgOption === 0" />
              </v-container>

              <v-file-input
                v-if="swtichs.switchImgOption === 1"
                required
                label="Subir foto"
                v-model="user.img"
                outlined
              ></v-file-input>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="4">
              <v-switch inset v-model="swtichs.switchEmail" label="Correo" />
            </v-col>
            <v-col cols="12" md="8">
              <v-text-field
                v-if="swtichs.switchEmail"
                :required="swtichs.switchEmail"
                outlined
                label="Correo electrónico"
                name="email"
                :prepend-icon="icons.email"
                type="email"
                color="primary"
                :rules="emailRules"
                v-model="user.email"
            /></v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="4">
              <v-switch
                inset
                v-model="swtichs.switchVerifierCode"
                label="Código de caja"
              />
            </v-col>
            <v-col cols="12" md="8">
              <v-text-field
                v-if="swtichs.switchVerifierCode"
                :required="swtichs.switchVerifierCode"
                outlined
                label="Código de caja"
                name="code"
                :prepend-icon="icons.key"
                type="number"
                color="primary"
                :rules="onlyFourCharacters"
                v-model="user.verifierCode"
            /></v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="4">
              <v-switch
                inset
                v-model="swtichs.switchPassword"
                label="Contraseña"
              />
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-if="swtichs.switchPassword"
                :required="swtichs.switchPassword"
                outlined
                label="Contraseña nueva"
                name="password"
                :prepend-icon="icons.password"
                type="password"
                color="primary"
                :rules="passwordRules"
                v-model="user.password"
              />
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-if="swtichs.switchPassword"
                :required="swtichs.switchPassword"
                outlined
                label="Confirmar contraseña "
                name="password"
                :prepend-icon="icons.password"
                type="password"
                color="primary"
                :rules="passwordRules.concat(passwordMatch)"
                v-model="user.confirmPassword"
              />
            </v-col>
          </v-row>
        </v-container>
      </v-form>
      <ProgressLinear v-bind:loading="updateLoading" color="primary" />
    </v-card-text>

    <v-card-actions>
      <v-row justify="center">
        <v-col cols="12" sm="4" md="4">
          <v-btn
            dark
            block
            color="orange"
            @click="update"
            type="submit"
            :disabled="!valid"
            >Editar</v-btn
          >
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
import Alert from '../../alert/Alert';
import DialogImageProfile from '../../dialog/DialogImageProfile';
import ProgressLinear from '../../progressLinear/ProgressLinear';
import { rules } from '../../../utils/components/rules';
import { icons } from '../../../data/icons';
import { mapState } from 'vuex';

import axios from 'axios';
import { URL } from '../../../data/url';
import { convertObjectErrors } from '../../../utils/convertObjectErrors';
import { errorMsgUser } from '../../../data/errors';
import { successMsgUser } from '../../../data/sucess';

export default {
  name: 'PersonalEdit',

  components: {
    Alert,
    ProgressLinear,
    DialogImageProfile,
  },

  data: () => ({
    updateLoading: false,
    updateSuccessMsg: false,
    updateServerMsg: false,
    updateErrorMsg: false,

    valid: true,
    icons: icons,
    passwordRules: [rules.empty, rules.minimumEight],
    emailRules: [rules.empty, rules.email],
    emptyRules: [rules.empty],
    onlyFourCharacters: [rules.onlyFourCharacters],

    optionsImg: [
      { text: 'Subir  foto', value: 1 },
      { text: 'Seleccionar foto', value: 0 },
    ],
    swtichs: {
      switchEmail: false,
      switchVerifierCode: false,
      switchPassword: false,
      switchImg: false,
      switchImgOption: true,
    },
    user: {
      img: [],
      verifierCode: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  }),

  computed: {
    passwordMatch() {
      return (
        this.user.password === this.user.confirmPassword ||
        'La contraseña no coincide'
      );
    },
    ...mapState('user', ['user']),
  },

  methods: {
    async update() {
      let params = { user: this.user, switchs: this.swtichs };
      this.updateLoading = true;
      try {
        let response = await axios.post(
          URL + 'api/user/updateuser/' + this.$store.state.user.user.id,
          JSON.stringify({ ...params })
        );
        if (response.data.status === 'c8usu1') {
          this.updateSuccessMsg = successMsgUser.updated; // CÓDIGO CORRECTO ✅
          await this.$store.dispatch('user/setUpUser'); // SE ACTUALIZA OBJETO USER
          setTimeout(() => (this.updateSuccessMsg = false), 10000);
        } else if (response.data.status === '1F4usu1') {
          this.updateServerMsg = errorMsgUser.updateServer; // CÓDIGO ERRONEO DE LÓGICA 🔥
        } else if (response.data.errors) {
          let errors = convertObjectErrors(response.data.errors); // CREDENCIALES INCORRECTAS ❌
          this.updateServerMsg = errors;
        }
      } catch (error) {
        // ERROR EN EL SERVIDOR 🔥
        console.log(error.response);
        if (error.response.status === 404) {
          this.updateErrorMsg = errorMsgUser.update404;
        } else if (error.response.status === 500) {
          this.updateErrorMsg = errorMsgUser.update500;
        } else {
          this.updateErrorMsg = errorMsgUser.updateUn;
        }
        setTimeout(() => (this.updateErrorMsg = ''), 10000);
      } finally {
        this.updateLoading = false;
      }
    },
  },
};
</script>
