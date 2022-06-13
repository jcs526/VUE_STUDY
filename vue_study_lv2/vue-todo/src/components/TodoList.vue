<template>
  <div>
    <ul>
      <li v-for="(todoItem, index) in todoItems" :key="todoItem" class="shadow">
        <i
          class="check-btn fas fa-check"
          @click="toggleComplete(index)"
          :class="{ 'text-completed': todoItem.completed }"
        ></i>
        <span :class="{ 'text-completed': todoItem.completed }">{{
          todoItem.item
        }}</span>
        <span class="remove-btn" @click="removeTodo(todoItem, index)">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      todoItems: [],
    };
  },
  methods: {
    removeTodo: function (todoItem, index) {
      this.todoItems.splice(index, 1);
      localStorage.removeItem(todoItem);
    },
    toggleComplete: function (index) {
      // this.todoItems[index].completed = this.todoItems[index].completed ? false: true;
      this.todoItems[index].completed = !this.todoItems[index].completed;
      localStorage.removeItem(this.todoItems[index].item);
      localStorage.setItem(this.todoItems[index].item, JSON.stringify(this.todoItems[index]));
    },
  },
  created() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          this.todoItems.push(
            JSON.parse(localStorage.getItem(localStorage.key(i)))
          );
          // this.todoItems.push(localStorage.key(i));
        }
      }
    }
  },
};
</script>

<style>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.remove-btn {
  margin-left: auto;
  color: #de4343;
  cursor: pointer;
}
.check-btn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.check-btn-completed {
  color: #b3adad;
}
.text-completed {
  text-decoration: line-through;
  color: #b3adad;
}
/* 리스트 아이템 트랜지션 효과 */
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>