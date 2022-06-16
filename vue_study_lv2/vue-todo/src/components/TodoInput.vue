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
    <modal-component v-if="showModal" @close="showModal = false">
      <!--
        you can use custom content here to overwrite
        default content
      -->
      <h3 slot="header">
        경고!
        <i class="close-modal-btn fas fa-times" @click="showModal = false"></i>
      </h3>
      <div slot="body">아무것도 입력하지 않았습니다.</div>
      <div slot="footer"></div>
    </modal-component>
  </div>
</template>

<script>
import ModalComponent from './common/ModalComponent.vue';
export default {
  components: { ModalComponent },
  data() {
    return {
      newTodoItem: "",
      showModal:false
    };
  },
  methods: {
    addTodo: function () {
      if (this.newTodoItem !== "") {
        this.$store.commit('addOneItem',this.newTodoItem)
        this.newTodoItem=""
      }else{
        this.showModal=true
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