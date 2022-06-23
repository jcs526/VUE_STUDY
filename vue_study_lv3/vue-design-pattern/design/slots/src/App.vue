<template>
  <div id="app">
    <item>
      아이템
    </item>
    <item>
      <button>버튼</button>
      <img :src="url" alt="무야호~~">
    </item>
  </div>
</template>

<script>
import item from './item.vue'

export default {
  name: 'App',
  components: {
    item
  },
  data() {
    return {
      url: "./sdfsdfsdurl.jpg"
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
