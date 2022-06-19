<template>
  <header>
    <router-link to="/news">News</router-link> | 
    <router-link to="/ask">Ask</router-link> | 
    <router-link to="/jobs">Jobs</router-link> | 
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
header {
  background-color: #42b883;
  color: white;
  display: flex;
  padding: 8px 16px;
  font-size: 1.5em;
}
header a {
  color: white;
}
header a:not(:last-child) {
  margin-right: 16px;
}
header .router-link-exact-active {
  color: #354953;
}
</style>