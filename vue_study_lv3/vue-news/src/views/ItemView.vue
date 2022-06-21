<template>
  <div>
    <user-profile>
      <router-link slot="username" :to="`/user/${fetchedItem.user}`"
        >{{ fetchedItem.user }}
      </router-link>
      <template slot="time">{{ fetchedItem.time_ago }}</template>
    </user-profile>

    <section>
      <h2>{{ fetchedItem.title }}</h2>
    </section>
    <section>
      <!-- 질문댓글-->
      <div v-html="fetchedItem.content"></div>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import UserProfile from "../components/UserProfile.vue";

export default {
  components: { UserProfile },
  computed: {
    ...mapGetters(["fetchedItem"]),
  },
  created() {
    this.$store.dispatch("FETCH_ITEM", this.$route.params.id);
  },
};
</script>
<style>
</style>