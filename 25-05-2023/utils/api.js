import { todos } from "../script.js";
import { renderTodos } from "./fn.js";

const BASE_URL = "https://dummyjson.com/todos";

export const getTodos = () => {
  fetch(BASE_URL)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Risposta fallita");
      }
    })
    .then((data) => {
      todos.splice(0, todos.length, ...data.todos);
      renderTodos();
      console.log("Todos correttamente ricevuti");
    })

};

export const addTodo = async (todoText) => {
    let newTodo;
    try {
      const res = await fetch(`${BASE_URL}/add`, {
        method: "POST",
        body: JSON.stringify({ text: todoText, completed: false, userId: 5 }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) throw new Error();
  
      newTodo = await res.json();
      todos.unshift(Object.assign(newTodo, { todo: todoText }));
      renderTodos();
  
      console.log(`Todo con id: ${newTodo.id} correttamente aggiunto`);
    } catch (error) {
      console.error(
        `Qualcosa è andato storto provando ad aggiungere il nuovo todo`
      );
    }
  };

  export const updateTodo = (id, completed) => {
    const todo = todos.find((todo) => todo.id === id);
    if (!todo) return;
  
    fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      body: JSON.stringify({ completed }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        try {
          if (res.ok) {
            todo.completed = completed;
            renderTodos();
            console.log(`Todo con id: ${id} correttamente modificato`);
          } else {
            throw new Error("Risposta fallita");
          }
        } catch (err) {
          console.error(
            `Qualcosa è andato storto provando a modificare l'elemento con id ${id}`
          );
        }
      })
  };
  
  export const deleteTodo = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    if (index === -1) return;
  
    fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        try {
          if (res.ok) {
            todos.splice(index, 1);
            renderTodos();
            console.log(`Todo con id: ${id} correttamente eliminato`);
          } else {
            throw new Error("Risposta fallita");
          }
        } catch (err) {
          console.error(`Qualcosa è andato storto provando a eliminare l'elemento con id ${id}`);
        }
      })
  };
  
  
