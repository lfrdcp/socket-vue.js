<template>
  <v-main>
    <v-container>
      <Register />
    </v-container>
  </v-main>
</template>
<script>
import Register from '../components/register/Register';

export default {
  name: 'PageRegister',
  components: {
    Register,
  },
};
</script>
