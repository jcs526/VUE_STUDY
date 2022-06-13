<template>
  <div class="input-box shadow">
    <input
      type="text"
      v-model="newTodoItem"
      @keyup.enter="addTodo"
      placeholder="Type what you have to do!"
    />
    <!-- <button @click="addTodo">add</button> -->
    <span
      class="add-container"
      @click="addTodo"
      placeholder="Type what you have to do!"
    >
      <i class="fas fa-plus add-btn"></i>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodoItem: "",
    };
  },
  methods: {
    addTodo: function () {
      if (this.newTodoItem !== "") {
        let obj = { completed: false, item: this.newTodoItem };
        localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
        this.clearInput();
      }
    },
    clearInput: function () {
      this.newTodoItem = "";
    },
  },
};
</script>

<style>
input:focus {
  outline: none;
}
.input-box {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.input-box input {
  border-style: none;
  font-size: 0.9rem;
}
.add-container {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}
.add-btn {
  color: white;
  vertical-align: middle;
}
.close-modal-btn {
  color: #42b983;
  cursor: pointer;
}
</style>