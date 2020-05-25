<template>
  <v-container>
    <v-card class="elevation-24" shaped>
      <v-toolbar>
        <v-toolbar-title>Configuración del perfil</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-icon>settings </v-icon>
      </v-toolbar>
    </v-card>

    <v-row cols="12" sm="8" md="4">
      <v-col>
        <ProfileRead />
      </v-col>

      <v-col>
        <ProfileUpdate />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapState } from 'vuex';
import ProfileRead from '../components/settings/profile/ProfileRead';
import ProfileUpdate from '../components/settings/profile/ProfileUpdate';
export default {
  name: 'PageSettings',
  data: () => ({}),
  components: { ProfileRead, ProfileUpdate },
  computed: {
    ...mapState('currentUser', ['user']),
  },
  created() {},
  methods: {},
};
</script>
