<template>
  <v-main>
    <v-container>
      <Login />
    </v-container>
  </v-main>
</template>

<script>
import Login from '../components/login/Login';
import { icons } from '../data/icons';
export default {
  name: 'PaginaLogin',
  components: { Login },
  data: () => ({ icons: icons }),
};
</script>
