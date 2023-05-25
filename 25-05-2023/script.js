import { addTodo, getTodos } from "./utils/api.js";

const todoForm = document.querySelector("#new-todo-form");
const todoInput = document.querySelector("#new-todo-input");

export const todos = [];

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todoText = todoInput.value;

  if (!todoText) return;

  addTodo(todoText);
  todoInput.value = "";
});

getTodos();

