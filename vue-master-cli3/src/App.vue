<template>
  <div id="app">
    <too-bar></too-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import TooBar from './components/TooBar.vue'
import ToolBar from './components/TooBar.vue'

export default {
  components: { TooBar },
  name: 'App',
  comonents: {
    ToolBar,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
</style>
