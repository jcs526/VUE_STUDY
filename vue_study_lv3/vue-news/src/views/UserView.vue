<template>
  <div>
    <user-profile :info="user">
      <div slot="username">{{ user.id }}</div>
      <span slot="time">{{ user.created }}</span>
      <span slot="karma">
        {{ user.karma }}
      </span>
    </user-profile>
    <!-- <p>name : {{ user.id }}</p>
    <p>karma : {{ user.karma }}</p>
    <p>created : {{ user.created }}</p>
    <p v-html="user.about"></p> -->
  </div>
</template>

<script>
import { mapState } from "vuex";
import UserProfile from "../components/UserProfile.vue";
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
  components: { UserProfile },
};
</script>

<style>
</style>