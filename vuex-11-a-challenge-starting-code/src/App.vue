<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from './components/nav/TheHeader.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  components: {
    TheHeader
  },
  computed: {
    ...mapGetters('product', {
      products: 'products',
    }),
  },
  methods: {
    ...mapActions('user', {
      login: 'login',
      logout: 'logout',
      addProductToCart: 'addToCart',
      removeProductFromCart: 'removeFromCart',
    }),
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>