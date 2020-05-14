<template>
  <v-timeline-item :color="color" dark>
    <v-card class="elevation-24" shaped>
      <v-card-title :class="color">
        <h3>
          {{ titulo }}
        </h3>
      </v-card-title>

      <v-container>
        <v-row>
          <!-- <v-col>
            <v-img
              v-if="img"
              :src="require('@/assets/img/' + nombreImg + '')"
              aspect-ratio="2"
            />
          </v-col> -->
          <v-col>
            <p>{{ contenido }}</p>
          </v-col>

          <v-speed-dial direction="bottom" transition="scale-transition">
            <template v-slot:activator>
              <v-btn color="blue darken-2" dark fab small>
                <v-icon>style</v-icon>
              </v-btn>
            </template>
            <v-btn
              fab
              small
              class="elevation-24"
              color="orange"
              :to="{ path: '/inicio/editTask/' + id }"
            >
              <v-icon>create</v-icon> </v-btn
            ><v-btn
              fab
              small
              class="elevation-24"
              color="red"
              :to="{ path: '/inicio/editTask/' + id }"
            >
              <v-icon>delete_outline</v-icon>
            </v-btn>
          </v-speed-dial>
        </v-row>
      </v-container>
    </v-card>
  </v-timeline-item>
</template>
<script>
export default {
  name: "TimeLine",
  props: ["id", "titulo", "contenido", "color", "img", "nombreImg"],
};
</script>

<style>
/* This is for documentation purposes and will not be needed in your application */
#create .v-speed-dial {
  position: absolute;
}

#create .v-btn--floating {
  position: relative;
}
</style>
