<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ApiList/>
  </div>
</template>

<script>

import ApiList from './components/ApiList.vue'

export default {
  name: 'App',
  components: {
    ApiList
  }
}
</script>

<style lang="scss">
@import '~@/styles/global/index';

.searchBar {
  margin: 48px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
