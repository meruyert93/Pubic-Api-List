<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <SearchBar
      value="hello"
    />
    <ApiList/>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar.vue'
import ApiList from './components/ApiList.vue'

export default {
  name: 'App',
  components: {
    SearchBar,
    ApiList
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
  color: #2c3e50;
  margin-top: 60px;
}
</style>
