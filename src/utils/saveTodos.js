export const saveTodos = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};
