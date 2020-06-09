<template>
  <v-card class="elevation-24" shaped>
    <v-toolbar dark>
      <v-toolbar-title>Editar datos</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon>{{ icons.update }} </v-icon>
    </v-toolbar>

    <v-card-title class="justify-center"></v-card-title>

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
      <v-btn
        block
        color="primary"
        @click="update"
        type="submit"
        :disabled="!valid"
        >Editar</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
import Alert from '../../alert/Alert';
import DialogImageProfile from '../../dialog/DialogImageProfile';
import ProgressLinear from '../../progressLinear/ProgressLinear';
import { rules } from '../../../utils/components/rules';
import { mapState } from 'vuex';
import { icons } from '../../../data/icons';
export default {
  name: 'PersonalEdit',
  components: {
    Alert,
    ProgressLinear,
    DialogImageProfile,
  },
  data: () => ({
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
    ...mapState('user', [
      'updateLoading',
      'updateServerMsg',
      'updateSuccessMsg',
      'updateErrorMsg',
    ]),
  },
  methods: {
    update() {
      let params = { user: this.user, switchs: this.swtichs };
      this.$store.dispatch('user/update', params);
    },
  },
};
</script>
