<template>
  <v-card class="elevation-24" shaped>
    <Snackbar
      v-bind:snackbar="updateSnackbar"
      text="Se ha actualizado el usuario de manera correcta"
      color="success"
    />
    <v-toolbar dark>
      <v-toolbar-title>Editar datos</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon>create</v-icon>
    </v-toolbar>

    <v-card-title class="justify-center"></v-card-title>

    <v-container>
      <Alert
        color="warning"
        icono="warning"
        :texto="updateMessage"
        v-if="updateMessage"
      />
    </v-container>

    <v-card-text>
      <v-form v-model="valid">
        <v-simple-table>
          <template>
            <tbody>
              <tr>
                <th>
                  <v-switch
                    v-model="swtichs.switchImg"
                    label="Foto de perfil"
                  ></v-switch>
                </th>
                <td @click="swtichs.switchImgUpload = !swtichs.switchImgUpload">
                  <v-switch
                    v-if="swtichs.switchImg"
                    v-model="swtichs.switchImgDefault"
                    label="Fotos sugeridas"
                  ></v-switch>
                  <DialogImageProfile
                    v-if="swtichs.switchImgDefault && swtichs.switchImg"
                  />
                </td>
                <td
                  @click="swtichs.switchImgDefault = !swtichs.switchImgDefault"
                >
                  <v-switch
                    v-if="swtichs.switchImg"
                    v-model="swtichs.switchImgUpload"
                    label="Subir foto"
                  ></v-switch>
                  <v-file-input
                    v-if="swtichs.switchImgUpload && swtichs.switchImg"
                    :required="swtichs.switchImgUpload"
                    :rules="emptyRules"
                    accept="image/png, image/jpeg, image/bmp"
                    placeholder="Subir foto"
                    prepend-icon="mdi-camera"
                    label="Subir foto"
                    v-model="user.img"
                  ></v-file-input>
                </td>
              </tr>
              <tr>
                <th class="text-right">
                  <v-switch
                    v-model="swtichs.switchEmail"
                    label="Correo electrónico"
                  ></v-switch>
                </th>

                <td class="text-left">
                  <v-text-field
                    v-if="swtichs.switchEmail"
                    :required="swtichs.switchEmail"
                    dense
                    label="Correo electrónico"
                    name="email"
                    prepend-icon="email"
                    type="email"
                    color="primary"
                    :rules="emailRules"
                    v-model="user.email"
                  />
                </td>
              </tr>
              <tr>
                <th class="text-right">
                  <v-switch
                    v-model="swtichs.switchVerifierCode"
                    label="Código para caja"
                  ></v-switch>
                </th>
                <td class="text-left">
                  <v-text-field
                    v-if="swtichs.switchVerifierCode"
                    :required="swtichs.switchVerifierCode"
                    dense
                    label="Código para caja"
                    name="code"
                    prepend-icon="vpn_key"
                    type="number"
                    color="primary"
                    :rules="onlyFourCharacters"
                    v-model="user.verifiercode"
                  />
                </td>
              </tr>

              <tr>
                <th class="text-right">
                  <v-switch
                    v-model="swtichs.switchPassword"
                    label="Contraseña"
                  ></v-switch>
                </th>

                <td class="text-left">
                  <v-text-field
                    v-if="swtichs.switchPassword"
                    :required="swtichs.switchPassword"
                    dense
                    label="Contraseña nueva"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                    color="primary"
                    :rules="passwordRules"
                    v-model="user.password"
                  />
                </td>

                <td class="text-left">
                  <v-text-field
                    v-if="swtichs.switchPassword"
                    :required="swtichs.switchPassword"
                    dense
                    label="Confirmar contraseña nueva"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                    color="primary"
                    :rules="passwordRules.concat(passwordMatch)"
                    v-model="user.confirmPassword"
                  />
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-form>
      <ProgressLinear v-bind:loading="updateLoading" color="primary" />
    </v-card-text>

    <v-card-actions>
      <v-btn
        block
        color="primary"
        @click="updateUser"
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
import Snackbar from '../../snackbar/Snackbar';
import { rules } from '../../../utils/components/rules';
import { mapState } from 'vuex';

export default {
  name: 'PersonalEdit',
  components: {
    Alert,
    ProgressLinear,
    DialogImageProfile,
    Snackbar,
  },
  data: () => ({
    valid: true,
    passwordRules: [rules.empty, rules.minimumEight],
    emailRules: [rules.empty, rules.email],
    emptyRules: [rules.empty],
    onlyFourCharacters: [rules.onlyFourCharacters],
    swtichs: {
      switchEmail: false,
      switchVerifierCode: false,
      switchPassword: false,
      switchImg: false,
      switchImgDefault: true,
      switchImgUpload: false,
    },
    user: {
      img: '',
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
    ...mapState('currentUser', [
      'updateLoading',
      'updateMessage',
      'updateSnackbar',
    ]),
  },
  methods: {
    updateUser() {
      let params = { user: this.user, swtichs: this.swtichs };
      this.$store.dispatch('currentUser/updateUser', params);
    },
  },
};
</script>
