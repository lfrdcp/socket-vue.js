<template>
  <v-timeline-item hide-dot fill-dot :color="color" dark>
    <v-card class="elevation-24" shaped>
      <v-card-title :class="color">
        <h3>
          {{ titulo }}
        </h3>
      </v-card-title>

      <v-container>
        <v-col>
          <p>{{ contenido }}</p>
        </v-col>
      </v-container>
      <v-card-actions>
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
      </v-card-actions>
    </v-card>
  </v-timeline-item>
</template>
<script>
export default {
  name: 'TimeLine',
  props: ['id', 'titulo', 'contenido', 'color', 'img', 'nombreImg'],
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
