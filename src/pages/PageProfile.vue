<template>
  <v-container>
    <v-card class="elevation-24" shaped>
      <v-toolbar>
        <v-toolbar-title>Perfil</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-icon>{{ icons.fingerprint }} </v-icon>
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
import { icons } from '../data/icons';
export default {
  name: 'PageSettings',
  data: () => ({ icons: icons }),
  components: { ProfileRead, ProfileUpdate },
  computed: {
    ...mapState('currentUser', ['user']),
  },
  created() {},
  methods: {},
};
</script>
