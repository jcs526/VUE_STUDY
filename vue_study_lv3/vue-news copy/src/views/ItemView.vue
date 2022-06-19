<template>
  <div>
  comments : 
    <div v-for="comment in fetchedItem.comments" :key="comment.id">
    <p>{{comment.id}}</p>
    <p>{{comment.user}}</p>
    <p>{{comment.time}}</p>
    <p>{{comment.content}}</p>
    ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
    </div>
  <p>comments_count : {{fetchedItem.comments_count}} </p>
  <p>content : {{fetchedItem.content}}</p>
  <p>id : {{fetchedItem.id}}</p>
  <p>points : {{fetchedItem.points}}</p>

  </div>
</template>


<script>
import { mapGetters } from 'vuex';

export default {
  computed:{
    ...mapGetters(['fetchedItem'])
  },
  created() {
    this.$store.dispatch('FETCH_ITEM',this.$route.path);
  },
};
</script>
<style>
</style>