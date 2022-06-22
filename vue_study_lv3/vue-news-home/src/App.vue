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
import ToolBar from './components/ToolBar.vue'
import Spinner from './views/Spinner.vue'

export default {
  components: { ToolBar, Spinner },
  data() {
    return {
      conditon : true,
    }
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