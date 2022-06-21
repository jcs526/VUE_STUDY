<template>
  <div>
    <!-- <p>id : {{user.id}}</p>
    <p>created : {{user.created}}</p>
    <p>karma : {{user.karma}}</p> -->
    <user-profile>
      <div slot="name">{{user.id}}</div>
      <span slot="time">{{user.created}}</span>
      <span slot="karma">{{user.karma}}</span>
    </user-profile>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import UserProfile from '../components/UserProfile.vue';

export default {
  components: { UserProfile },
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