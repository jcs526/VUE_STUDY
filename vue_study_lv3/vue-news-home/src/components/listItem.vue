<template>
  <ul class="fetched-list">
      <li v-for="item in news" :key="item.id" class="fetched-item">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <!-- 타이틀 영역 -->
          <p class="fetched-title">
            <template v-if="item.domain">
              <a :href="item.url">
                {{ item.title }}
              </a>
            </template>
            <template v-else>
              <router-link :to="`item/${item.id}`">
                {{ item.title }}
              </router-link>
            </template>
            <small class="link-text">
              {{ item.time_ago }} by
              <router-link
                v-if="item.user"
                :to="`/user/${item.user}`"
                class="link-text"
              >
                {{ item.user }}
              </router-link>
              <a v-else :href="item.url">
                {{ item.domain }}
              </a>
            </small>
          </p>
        </div>
      </li>
    </ul>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(["news"]),
  },
  
created() {
    this.$store.dispatch("FETCH_NEWS");
  },
}
</script>

<style>
.fetched-list {
  margin: 0;
  padding: 0;
}
.fetched-item {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 60px;
  color: #42b883;
}
.fetched-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>