<template>
  <div>
    <ul>
        <li v-for="item in items" :key="item" >{{item}}</li>
        <button @click="$emit('renew')">click</button>
    </ul>
  </div>
</template>

<script>
export default {
    props: {
    items: {
      type: Array,
      required: true,
    },
  },
    methods: {
        event(){
            this.$emit('renew');
        }
    },
}
</script>

<style>

</style>