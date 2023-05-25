import { todos } from "../script.js";
import { deleteTodo, updateTodo } from "./api.js";

const todoList = document.querySelector("#todo-items");

export const renderTodos = () => {
  while (todoList.firstChild) {
    todoList.firstChild.remove();
  }

  todos.forEach((todo) => {
    const li = document.createElement("li");
    const todoText = document.createElement("span");
    const deleteButton = document.createElement("button");
    todoText.textContent = todo.todo;
    li.appendChild(todoText);

    if (todo.completed) {
      li.classList.add("completed");
    }

    li.addEventListener("click", () => updateTodo(todo.id, !todo.completed));

    deleteButton.textContent = "Task completata, eliminala";
    deleteButton.className = "delete-button";

    li.appendChild(deleteButton);
    todoList.appendChild(li);

    deleteButton.addEventListener("click", (e) => {
      e.stopPropagation();
      deleteTodo(todo.id);
    });
  });
};
