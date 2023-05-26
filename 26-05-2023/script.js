import { addTodo, getTodos, loadTodosFromLocalStorage } from "./utils/api.js";

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


loadTodosFromLocalStorage();


getTodos();

// Visualizzazione dei dati nel localStorage
const storedTodos = localStorage.getItem("todos");
if (storedTodos) {
  console.log(JSON.parse(storedTodos));
} else {
  console.log("Nessun dato delle 'todo' presente nel localStorage");
}



// switch button

const checkbox = document.getElementById("checkbox");
const body = document.body;

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }
});





