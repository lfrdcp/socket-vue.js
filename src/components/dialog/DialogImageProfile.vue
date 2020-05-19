<template>
  <v-dialog v-model="dialog" width="900">
    <template v-slot:activator="{ on }">
      <v-btn v-on="on">
        Fotos sugeridas
      </v-btn>
    </template>

    <v-card shaped>
      <v-toolbar dark>
        <v-toolbar-title>Fotos sugeridas por el sistema</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-icon>create </v-icon>
      </v-toolbar>

      <v-container fluid>
        <v-row>
          <v-col v-for="i in 25" :key="i">
            <v-avatar class="profile" size="100">
              <v-img
                :src="require(`../../assets/imgProfile/profile (${i}).jpg`)"
              ></v-img>
            </v-avatar>
          </v-col>
        </v-row>
      </v-container>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="dialog = false" dark>
          De acuerdo
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: "DialogImageProfile",
  data: () => ({
    dialog: false,
  }),
};
</script>
