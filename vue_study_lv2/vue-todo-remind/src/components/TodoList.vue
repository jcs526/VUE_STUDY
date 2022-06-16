<template>
  <div>
    <div v-for="(todoItem,index) in todoItems" :key="todoItem">
      <button @click="toggleCompleted({todoItem})">체크</button>
      <span v-if="!todoItem.completed">
      <span>{{ todoItem.item }}</span>
      </span>
      <span v-else>
        할일완료!
      </span>
      <button @click="removeTodoItem({todoItem,index})">삭제</button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState} from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["todoItems"]),
  },
  methods: {
    ...mapMutations(["removeTodoItem","toggleCompleted"])
  },
};
</script>

<style>
</style>