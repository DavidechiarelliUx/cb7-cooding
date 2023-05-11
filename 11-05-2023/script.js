// esercizio 1
//sulla base della lezione del giorno, costruire una array di oggetti, in cui ognuno di essi debba avere almeno un id e un titolo come chiavi. La seguente lista deve essere renderizzata sul DOM e non su console.log. Attenzione: non scrivere in modo statico alcun elemento
const pizzaMargherita = {
  id: 1,
  title: "Pizza Margherita",
  price: "8.50",
};

const pizzaDiavola = {
  id: 2,
  title: "Pizza Diavola",
  price: "9.00",
};

const pizzaMarinara = {
  id: 3,
  title: "Pizza Marinara",
  price: "7.50",
};

const pizzaCrostino = {
  id: 4,
  title: "Pizza Crostino",
  price: "10.00",
};

const menu = [pizzaMargherita, pizzaDiavola, pizzaMarinara, pizzaCrostino];

const cE = (element) => document.createElement(element);
const qS = (element) => document.querySelector(element);
const qSA = (elements) => document.querySelectorAll(elements);

const menuContainer = cE("div");
menuContainer.setAttribute("class", "menu-container");

menu.forEach((pizza) => {
  const pizzaCard = cE("div");
  pizzaCard.setAttribute("class", "pizza-card");

  const pizzaTitle = cE("h2");
  pizzaTitle.textContent = pizza.title;
  pizzaCard.appendChild(pizzaTitle);

  const pizzaPrice = cE("p");
  pizzaPrice.setAttribute("class", "pizza-price");
  pizzaPrice.textContent = `Price: $${pizza.price}`;
  pizzaCard.appendChild(pizzaPrice);

  menuContainer.appendChild(pizzaCard);
});

document.body.appendChild(menuContainer);
