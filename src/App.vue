<template>
  <div id="app">
    <img class="image" alt="Vue logo" src="./assets/logo.png">
    <Header/>
    <ApiList/>
    <Footer/>
  </div>
</template>

<script>

import ApiList from './components/ApiList.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    ApiList,
    Footer,
    Header
  }
}
</script>

<style lang="scss">
@import '~@/styles/global/index';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--deep-gray);
  margin-top: 60px;
}

.image {
  width: 64px;
}
</style>
