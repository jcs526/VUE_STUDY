<template>
  <div>
    <p v-for="item in asks" :key="item.id">
    <!-- <a :href="item.url">{{item.title}}</a> -->
    <router-link :to="'/item/'+item.id">{{item.title}}</router-link>
    {{item.time_ago}} by {{item.user}}
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
    };
  },
  computed:{
    ...mapState({
      asks: state => state.asks
    })
  },
  created() {
    this.$store.dispatch('FETCH_ASKS')
  },
};
</script>

<style>
</style>