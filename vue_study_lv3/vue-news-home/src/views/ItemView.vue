<template>
  <div>
    <section>
      <!-- 질문 상세정보 -->
      <div>
        <div class="user-container">
          <font-awesome-icon
            :icon="['fas', 'user']"
            class="user-icon"
          ></font-awesome-icon>

          <div>
            <router-link :to="`/user/${fetchedItem.user}`">
              {{ fetchedItem.user }}
            </router-link>
            <div id="time">
              {{ fetchedItem.time_ago }}
            </div>
          </div>
        </div>
        <h2>{{ fetchedItem.title }}</h2>
      </div>
    </section>
    <section>
      <div v-html="fetchedItem.content"></div>
    </section>
  </div>
</template>


<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["fetchedItem"]),
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