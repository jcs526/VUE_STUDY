<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import listItem from "../components/ListItem.vue";
// import bus from "../utils/bus.js";
import mixins from '../mixins/ListMixin.js'
import bus from "../utils/bus.js";

export default {
  // mixins: [mixins],
  components: { listItem },
  // created() {
  //   bus.$emit("start:spinner");
  //   setTimeout(()=>this.$store
  //     .dispatch("FETCH_NEWS")
  //     .then(() => bus.$emit("end:spinner"))
  //     .catch((err) => console.log(err)),3000);
  // },
  mounted() {
    bus.$emit("end:spinner")
  },
};
</script>

<style>
</style>