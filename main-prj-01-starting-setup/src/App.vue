<template>
  <TheHeader />
  <RouterView />
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import { RouterView } from 'vue-router';
export default {
  components: {
    TheHeader, RouterView
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}
</style>