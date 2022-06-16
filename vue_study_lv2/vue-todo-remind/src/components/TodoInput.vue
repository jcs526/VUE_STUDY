<template><div>
  <input type="text" v-model="newTodoItem" @keyup.enter="addTodoItem(newTodoItem)">
  <button @click="addTodoItem(newTodoItem)" >입력</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    data() {
        return {
            newTodoItem:"",
        }
    },
    methods: {
        ...mapMutations(['addTodoItem'])
    },
}
</script>

<style>

</style>