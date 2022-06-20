<template>
  <div>
    <section>
      <div class="user-container">
        <div>
        <font-awesome-icon
            :icon="['fas', 'user']"
            class="user-icon"
          ></font-awesome-icon></div>
        <div>
          <router-link :to="`/user/${item.user}`">{{ item.user }} </router-link>
        </div>
        </div>
        <h2>{{ item.title }}</h2>
      
    </section>
    <section></section>

    <div v-html="item.content"></div>
    <div v-for="as in item.comments" :key="as.comments.id">
      <p v-html="as.content"></p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  computed: {
    ...mapGetters({ item: "fetchedItem" }),
  },
  created() {
    this.$store.dispatch("FETCH_ITEM", this.$route.params.id);
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