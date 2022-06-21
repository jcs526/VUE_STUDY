<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import listItem from '../components/ListItem.vue';
import bus from "../utils/bus.js";


export default {
  components: { listItem },
   created() {
    bus.$emit("start:spinner");
    setTimeout(()=>this.$store
      .dispatch("FETCH_JOBS")
      .then(() => bus.$emit("end:spinner"))
      .catch((err) => console.log(err)),3000);
  },
};
</script>

<style>

</style>