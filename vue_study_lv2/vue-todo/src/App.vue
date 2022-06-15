<template>
  <div id="app">
    <todo-header />
    <todo-input @addTodoItem="addOneItem" />
    <todo-list :propsdata="todoItems" @removeItem="removeOneItem" @toggleItem="toggleOneItem" />
    <todo-footer @clearItems="clearAllItems"/>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  data () {
    return {
      todoItems: [],
    };
  },

  methods: {
    addOneItem (todoItem) {
      let obj = { completed: false, item: todoItem };
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeOneItem(todoItem,index) {
      console.log(typeof todoItem)
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
    },
    toggleOneItem (index) {
      this.todoItems[index].completed = !this.todoItems[index].completed;
      localStorage.removeItem(this.todoItems[index].item);
      localStorage.setItem(this.todoItems[index].item, JSON.stringify(this.todoItems[index]));
    },
    clearAllItems  () {
      localStorage.clear();
      this.todoItems = [];
    }
  },

  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  },

  
};
</script>

<style>
body {
  font-family: "Ubuntu";
  text-align: center;
  background-color: #f6f6f6;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>