<template>
  <div>
    <h1>{{ propsData }}</h1>
    <button @click="sendEvent">클릭</button>
  </div>
</template>

<script>
export default {
  // props:{
  //     propsdata:String,
  // },
  props: ["propsData"],
  methods: {
    sendEvent: function () {
      this.$emit("renew");
    },
  },
};
</script>

<style>
</style>