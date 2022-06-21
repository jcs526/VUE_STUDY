<template>
  <div class="user-container">
    <div>
      <font-awesome-icon
        :icon="['fas', 'user']"
        class="user-icon"
      ></font-awesome-icon>
    </div>
    <div class="user-description">
      <!-- <template v-if="info.id">
            <div>
                {{info.id}}
            </div>
        </template>
        <template v-else>
            <div>
                {{info.user}}
            </div>
        </template> -->
      <slot name="username"></slot>
      <div class="time">
        <slot name="time"></slot>
        
      <slot name="karma"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    userInfo() {
      return this.$store.state.user;
    },
  },
  props: {
    info: Object,
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