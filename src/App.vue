<template>
  <v-app
    style="
      background: linear-gradient(#1e96fc  ,#ffffff );
      background-repeat: no-repeat;
      background-attachment: fixed;
    "
  >
    <v-content>
      <v-container class="fill-height" fluid>
        <router-view> </router-view>
      </v-container>
    </v-content>
    <Footer v-show="footer" />
  </v-app>
</template>

<script>
import axios from 'axios';
import Footer from './components/footer/Footer';
export default {
  name: 'App',
  components: {
    Footer,
  },
  data: () => ({
    token: null,
    drawer: null,
  }),
  computed: {
    footer() {
      if (this.$route.path === '/login' || this.$route.path === '/register') {
        return true;
      } else {
        return false;
      }
    },
  },
  created() {
    if (Object.prototype.hasOwnProperty.call(localStorage, 'blog_token')) {
      axios.defaults.headers.common['Authorization'] =
        'Bearer ' + localStorage.getItem('blog_token');
    }
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Abel&family=Manrope&family=Montserrat:ital,wght@0,100;0,200;1,200&family=Permanent+Marker&display=swap');

.v-application {
  font-family: 'Abel', sans-serif !important;
}
</style>
