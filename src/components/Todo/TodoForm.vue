<template>
  <form @submit="handleCreateTodo" class="flex gap-2">
    <input
      type="text"
      maxlength="64"
      v-model="todo.title"
      class="border border-black border-solid w-4/5 rounded-sm px-2" />
    <button
      type="submit"
      class="p-1 bg-green-600 hover:bg-green-700 text-white transition-all duration-300 w-1/5 rounded-sm">
      Add
    </button>
  </form>
</template>

<script setup>
import { saveTodos } from "@/utils/saveTodos.js";
import { ref, toRaw } from "vue";
const props = defineProps({
  todos: Array,
});

const emit = defineEmits(["addTodo"]);

const todo = ref({
  id: null,
  title: "",
  checked: false,
});

const handleCreateTodo = (e) => {
  e.preventDefault();
  if (todo.value.title.length === 0) return;
  console.log(props.todos);
  todo.value.id = Math.floor(Math.random() * 9999);
  emit("addTodo", { ...todo.value });

  const rawTodos = toRaw(props.todos);
  saveTodos(rawTodos);

  todo.value = {
    id: null,
    title: "",
    checked: false,
  };
};
</script>
