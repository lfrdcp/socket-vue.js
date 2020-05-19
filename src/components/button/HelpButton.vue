<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on" dark>
          <i class="material-icons">help_outline</i>
        </v-btn>
      </template>

      <v-card dark shaped>
        <v-card-title>
          ¿No tienes una cuenta?
        </v-card-title>

        <v-card-text>
          Contactanos a travez de nuestras redes sociales, las cuales se
          encuentran en la parte de abajo, en el pie de pagina
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false" dark>
            De acuerdo
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  name: "HelpButton",
  data: () => ({
    dialog: false,
  }),
};
</script>
