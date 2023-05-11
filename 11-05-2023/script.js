// // esercizio 1
// //sulla base della lezione del giorno, costruire una array di oggetti, in cui ognuno di essi debba avere almeno un id e un titolo come chiavi. La seguente lista deve essere renderizzata sul DOM e non su console.log. Attenzione: non scrivere in modo statico alcun elemento

// const pizzaMargherita = {
//     id: 1,
//     title: "Pizza Margherita",
//     price: "8.50",
//   };

//   const pizzaDiavola = {
//     id: 2,
//     title: "Pizza Diavola",
//     price: "9.00",
//   };

//   const pizzaMarinara = {
//     id: 3,
//     title: "Pizza Marinara",
//     price: "7.50",
//   };

//   const pizzaCrostino = {
//     id: 4,
//     title: "Pizza Crostino",
//     price: "10.00",
//   };

//   const menu = [pizzaMargherita, pizzaDiavola, pizzaMarinara, pizzaCrostino];

//   const cE = (element) => document.createElement(element);
//   const qS = (element) => document.querySelector(element);
//   const qSA = (elements) => document.querySelectorAll(elements);

//   const menuContainer = cE("div");
//   menuContainer.setAttribute("class", "menu-container");

//   menu.forEach((pizza) => {
//     const pizzaCard = cE("div");
//     pizzaCard.setAttribute("class", "pizza-card");

//     const pizzaTitle = cE("h2");
//     pizzaTitle.textContent = pizza.title;
//     pizzaCard.appendChild(pizzaTitle);

//     const pizzaPrice = cE("p");
//     pizzaPrice.setAttribute("class", "pizza-price");
//     pizzaPrice.textContent = `Price: $${pizza.price}`;
//     pizzaCard.appendChild(pizzaPrice);

//     menuContainer.appendChild(pizzaCard);
//   });

//   document.body.appendChild(menuContainer);

// esercizio avanzato
//Realizzare una todo-list che permetta all'utente di aggiungere e rimuovere elementi dalla lista. Per trarre ispirazione, o modello da copiare, seguire uno dei seguenti https://dribbble.com/search/shots/popular/mobile?q=todo-list

const todoListContainer = document.createElement("div");
todoListContainer.classList.add("todo-list");

const title = document.createElement("h1");
title.textContent = "Scrivi che pizze vuoi";

const inputContainer = document.createElement("div");
inputContainer.classList.add("input-container");

const input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Aggiungi elemento");

const addButton = document.createElement("button");
addButton.textContent = "Aggiungi";

const todoItemsContainer = document.createElement("div");
todoItemsContainer.classList.add("todo-items-container");

inputContainer.appendChild(input);
inputContainer.appendChild(addButton);

todoListContainer.appendChild(title);
todoListContainer.appendChild(inputContainer);
todoListContainer.appendChild(todoItemsContainer);

document.body.appendChild(todoListContainer);

addButton.addEventListener("click", addTodoItem);

function addTodoItem() {
  const todoItem = input.value;

  if (todoItem) {
    const itemContainer = document.createElement("div");
    itemContainer.classList.add("todo-item-container");

    const itemTitle = document.createElement("h2");
    itemTitle.textContent = todoItem;

    const itemPrice = document.createElement("p");
    itemPrice.textContent = "";
    itemPrice.classList.add("pizza-price");

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "ordina ora";

    itemContainer.appendChild(itemTitle);
    itemContainer.appendChild(itemPrice);
    itemContainer.appendChild(deleteButton);

    todoItemsContainer.appendChild(itemContainer);

    deleteButton.addEventListener("click", function () {
      itemContainer.remove();
    });

    input.value = "";
  }
}
