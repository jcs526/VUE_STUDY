<template>
  <div>
    <div v-for="ask in fetchedAsk" :key="ask.id">
    <router-link :to="`/item/${ask.id}`">
    {{ ask.title }}
    </router-link>
    </div>
  </div>
</template>

<script>
import { mapState,mapGetters } from "vuex";
export default {
  computed:{
    ...mapState(['asks']),
    ...mapGetters(['fetchedAsk'])
  },
  created() {
   this.$store.dispatch('FETCH_ASKS')
  },
};
</script>

<style>
</style>