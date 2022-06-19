<template>
  <div>
    <p>id : {{user.id}}</p>
    <p>created : {{user.created}}</p>
    <p>karma : {{user.karma}}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed:{
    ...mapState(['user'])
  },
  created() {
    console.log(this.$route)
    this.$store.dispatch('FETCH_USER',this.$route.params.id)
  },

}
</script>

<style>

</style>