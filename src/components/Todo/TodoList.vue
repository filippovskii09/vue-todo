<template>
  <h3 v-if="todos.length === 0" class="text-xl font-medium text-center">
    No one items added
  </h3>
  <transition-group v-else name="fade" tag="ul" class="flex flex-col gap-2">
    <li
      v-for="(todo, index) in todos"
      :key="todo.id"
      class="rounded-sm p-1 pl-2 pr-3 bg-slate-400 text-white flex items-center justify-between gap-6">
      <div class="flex items-center gap-6">
        <input
          type="checkbox"
          :checked="todo.checked"
          @change="handleToggleTodoStatus(todo)"
          class="input-checbox w-5 h-5 cursor-pointer" />
        <p>{{ todo.title }}</p>
      </div>
      <button @click="handleRemoveTodo(index)">
        <IconDeleteTodo />
      </button>
    </li>
  </transition-group>
</template>

<script setup>
import { toRaw } from "vue";
import IconDeleteTodo from "../icons/IconDeleteTodo.vue";

const props = defineProps({
  todos: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["updateTodos"]);

const handleRemoveTodo = (index) => {
  props.todos.splice(index, 1);
  emit("updateTodos", toRaw(props.todos));
};

const handleToggleTodoStatus = (todo) => {
  todo.checked = !todo.checked;
  emit("updateTodos", toRaw(props.todos));
};
</script>

<style scoped>
.input-checbox {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
.input-checbox::before {
  content: "";
  border-radius: 5px;
  background: #fff;
  display: inline-block;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
}
.input-checbox:checked::before {
  content: url(/public/check-svgrepo-com.svg);
}
.fade-leave-active {
  transition: all 0.8s ease-in 0s;
  transform: translateX(-100%);
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
