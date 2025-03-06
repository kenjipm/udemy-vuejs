<template>
  <base-container title="Vuex" v-if="isAuthenticated">
    <h3>{{ finalCounter }}</h3>
    <h3>{{ normalizedCounter }}</h3>
    <button @click="increment">Add 1</button>
    <button @click="increase(10)">Add 10</button>
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import UserAuth from './components/UserAuth.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  components: {
    BaseContainer, UserAuth
  },
  computed: {
    ...mapGetters('counter', ['finalCounter', 'normalizedCounter']),
    ...mapGetters(['isAuthenticated']),
  },
  methods: {
    ...mapActions('counter', ['increment', 'increase'])
    // addOne() {
    //   this.$store.dispatch('increment');
    // },
    // addTen() {
    //   this.$store.dispatch({
    //     type: 'increase',
    //     value: 10
    //   });
    // }
  } 
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