<template>
  <div>
    <p>name : {{ user.id }}</p>
    <p>karma : {{ user.karma }}</p>
    <p>created : {{ user.created }}</p>
    <p v-html="user.about"></p>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["user"]),
  },
  created() {
    console.log(this.$route.params.id);
    const userName = this.$route.params.id;
    //  axios.get(`https://api.hnpwa.com/v0/user/${userName}.json`)
    this.$store.dispatch("FETCH_USERINFO", userName);
  },
};
</script>

<style>
</style>