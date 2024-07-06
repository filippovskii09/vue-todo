<template>
  <div class="max-w-4xl w-full mx-auto flex flex-col gap-3 p-4">
    <h2 class="text-2xl text-black font-semibold p-2 text-center">
      To Do List
    </h2>
    <TodoForm :todos="todos" @addTodo="addTodo" />
    <TodoList :todos="todos" @updateTodos="handleUpdateTodos" />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { loadTodos } from "../../utils/loadTodos.js";
import TodoForm from "./TodoForm.vue";
import TodoList from "./TodoList.vue";
import { saveTodos } from "@/utils/saveTodos.js";

const todos = ref([]);

const addTodo = (todo) => {
  todos.value.push(todo);
  saveTodos(todos.value);
};

const handleUpdateTodos = (updatedTodos) => {
  todos.value = updatedTodos;
  saveTodos(todos.value);
};

onMounted(() => loadTodos(todos));
</script>
