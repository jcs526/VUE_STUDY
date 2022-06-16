<template><div>
  <todo-header></todo-header> 
  <todo-input></todo-input>
  <todo-list></todo-list> 
  <todo-footer></todo-footer>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'

import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoFooter from './components/TodoFooter.vue'
export default {
  components: { TodoHeader, TodoList, TodoInput, TodoFooter },
  data() {
    return {
      
    }
  },
  computed:{},
  methods: {
    
  },
  component:{
    TodoHeader
  }
}
</script>

<style>

</style>