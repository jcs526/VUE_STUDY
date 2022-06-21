<template>
  <div class="user-container">
          <font-awesome-icon
            :icon="['fas', 'user']"
            class="user-icon"
          ></font-awesome-icon>

          <div>
            <router-link :to="`/user/${fetchedItem.user}`">
              <!-- {{ fetchedItem.user }} -->
              <slot name="name"></slot>
            </router-link>
            <div id="time">
              <!-- {{ fetchedItem.time_ago }} -->
              <slot name="time"></slot>
              <slot name="karma"></slot>
            </div>
          </div>
        </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed:{
        ...mapState({fetchedItem:'user'})
    }
}
</script>

<style>

</style>