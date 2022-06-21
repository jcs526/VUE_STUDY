<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
    <spinner :loading="true"></spinner>
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar.vue";
import Spinner from "./views/Spinner.vue";

export default {
  components: { ToolBar, Spinner },
};
</script>

<style>
body {
  margin : 0px;
  padding: 0px;
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

.page-enter-active, .page-leave-action {
  transition: opacity .5s;
}

.page-enter, .page-leave-to {
  opacity: 0;
}
/* Router Transiton */
</style>