export const loadTodos = (todos) => {
  const storedTodos = localStorage.getItem("todos");
  todos.value = storedTodos ? JSON.parse(storedTodos) : [];
};
