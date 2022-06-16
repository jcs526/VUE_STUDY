<template>
  <button @click="clearAllItems">전부 삭제</button>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["clearAllItems"]),
  },
};
</script>

<style>
</style>