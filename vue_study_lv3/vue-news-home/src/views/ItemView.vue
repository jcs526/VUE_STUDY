<template>
  <div>
    <user-profile>
      <router-link slot="name" :to="`/user/${fetchedItem.user}`"
        >{{ fetchedItem.user }}
      </router-link>
      <template slot="time">{{ fetchedItem.time_ago }}</template>
    </user-profile>
    <section>
      <!-- 질문 상세정보 -->
      <div>
        <h2>{{ fetchedItem.title }}</h2>
      </div>
    </section>
    <section>
      <div v-html="fetchedItem.content"></div>
    </section>
  </div>
</template>


<script>
import { mapGetters, mapState } from "vuex";
import UserProfile from '../components/UserProfile.vue';

export default {
  components: { UserProfile },
  computed: {
    ...mapGetters(["fetchedItem"]),
    ...mapState(['user'])
  },
  created() {
    this.$store.dispatch("FETCH_ITEM", this.$route.path);
  },
};
</script>
<style>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.user-icon {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>