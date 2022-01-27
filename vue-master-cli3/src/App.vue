<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <spinner :loading="loadingStatus"></spinner>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue'
import Spinner from './components/Spinner.vue'
import bus from './utils/bus'

export default {
  name: 'App',
  components: {
    ToolBar,
    Spinner,
  },
  data() {
    return {
      loadingStatus: false,
    }
  },
  created() {
    // bus.$on('start:spinner', () => this.spinner = true);
    bus.$on('start:spinner', this.startSpinner); // recieved
    bus.$on('end:spinner', this.endSpinner); // recieved
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    }
  },
  beforeDestroy() {
    bus.$off('start:startSpinner')
    bus.$off('start:endSpinner')
  }
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

/* router transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.title {
   font-weight:bold;
   color: black;
}
.point {
  background:yellowgreen;
  width:50px;
  margin-right:5px;
}
</style>
