<template>
  <list-item></list-item>
</template>

<script>
import listItem from '../components/ListItem.vue';

export default {
 components: {
    listItem,
  },
  created(){
    this.$store.dispatch("FETCH_ASKS");
  }
};
</script>

<style>
</style>