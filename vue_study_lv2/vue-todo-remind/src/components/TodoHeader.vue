<template>
  <header>
    <h2>{{headerText}}</h2>
  </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data() {
        return {
            
        }
    },
    computed:{
      ...mapState(['headerText'])
    }

}
</script>

<style>

</style>