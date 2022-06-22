<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="page">
    <router-view></router-view>
    </transition>
    <spinner :loading="condition"></spinner>
  </div>
</template>

<script>
import bus from './utils/bus'
import ToolBar from './components/ToolBar.vue'
import Spinner from './views/Spinner.vue'

export default {
  components: { ToolBar, Spinner },
  data() {
    return {
      condition : false,
    }
  },
  methods: {
    spinnerStart(){
      console.log("스타트 작동함!")
      this.condition=true;
    },
    spinnerEnd(){
      this.condition=false;
    }
  },
  created() {
    bus.$on('start',this.spinnerStart)
    bus.$on('end',this.spinnerEnd)
  },
  beforeDestroy() {
    bus.$off('start',this.spinnerStart)
    bus.$off('end',this.spinnerEnd)
  },
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
a {
  color: #34495e;
  text-decoration: none;
}
a:hover {
  color: #42b883;
  text-decoration: underline;
}
a.router-link-exact-active {
  text-decoration: underline;
}
/* Router Transition */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>