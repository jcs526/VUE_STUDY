<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import listItem from '../components/ListItem.vue';
import ListMixin from '../mixins/ListMixin';
import bus from "../utils/bus.js";

export default {
  components: { listItem },
  // mixins:[ListMixin],
  //  created() {
  //   bus.$emit("start:spinner");
  //   setTimeout(()=>this.$store
  //     .dispatch("FETCH_ASKS")
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