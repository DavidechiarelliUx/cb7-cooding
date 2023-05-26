import { todos } from "../script.js";
import { renderTodos } from "./fn.js";

export const getTodos = () => {
  const storedTodos = localStorage.getItem("todos");
  if (storedTodos) {
    todos.splice(0, todos.length, ...JSON.parse(storedTodos));
    renderTodos();
    console.log("Todos correttamente recuperati dal localStorage");
  } else {
    console.log("Nessun dato delle 'todo' trovato nel localStorage");
  }
};

export const addTodo = (todoText) => {
  const newTodo = {
    id: getNextId(),
    todo: todoText,
    completed: false,
  };

  todos.unshift(newTodo);
  saveTodosToLocalStorage();
  renderTodos();

  console.log(`Todo con id: ${newTodo.id} correttamente aggiunto`);
};

export const updateTodo = (id, completed) => {
  const todo = todos.find((todo) => todo.id === id);
  if (!todo) return;

  todo.completed = completed;
  saveTodosToLocalStorage();
  renderTodos();

  console.log(`Todo con id: ${id} correttamente modificato`);
};

export const deleteTodo = (id) => {
  const index = todos.findIndex((todo) => todo.id === id);
  if (index === -1) return;

  todos.splice(index, 1);
  saveTodosToLocalStorage();
  renderTodos();

  console.log(`Todo con id: ${id} correttamente eliminato`);
};

const saveTodosToLocalStorage = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const getNextId = () => {
  const storedTodos = localStorage.getItem("todos");
  let maxId = 0;

  if (storedTodos) {
    const parsedTodos = JSON.parse(storedTodos);
    maxId = parsedTodos.reduce((max, todo) => (todo.id > max ? todo.id : max), 0);
  }

  return maxId + 1;
};

export const loadTodosFromLocalStorage = () => {
  const storedTodos = localStorage.getItem("todos");
  if (storedTodos) {
    todos.splice(0, todos.length, ...JSON.parse(storedTodos));
    renderTodos();
    console.log('Todos correttamente caricati da localStorage');
  } else {
    console.log('Nessun dato delle "todo" trovato nel localStorage');
  }
};

