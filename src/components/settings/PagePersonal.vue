<template>
  <v-container>
    <v-card class="elevation-24" shaped>
      <v-toolbar>
        <v-toolbar-title>Configuración personal de la cuenta</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-icon>settings </v-icon>
      </v-toolbar>
    </v-card>

    <v-row cols="12" sm="8" md="4">
      <v-col>
        <PersonalShow />
      </v-col>

      <v-col>
        <PersonalEdit />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapState } from "vuex";
import PersonalShow from "./personal/PersonalShow";
import PersonalEdit from "./personal/PersonalEdit";
export default {
  name: "PageSettings",
  data: () => ({}),
  components: { PersonalShow, PersonalEdit },
  computed: {
    ...mapState("currentUser", ["user"]),
  },
  created() {},
  methods: {},
};
</script>
