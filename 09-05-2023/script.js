// creazione della tendina che si apre e si chiude con hamburger che si trasforma in x
const hamburgerBtn = document.querySelector(".hamburger");
const tendinaDiv = document.querySelector(".tendina");

// trasformazione hamburger in x
hamburgerBtn.addEventListener("click", function () {
  hamburgerBtn.classList.toggle("active");
});
// click in console.log e apertura della tendina
function hamburgerFunc() {
  console.log("Hai cliccato");
  tendinaDiv.classList.toggle("show");
}

hamburgerBtn.addEventListener("click", hamburgerFunc);

// esercizio 1 crea pulsante che al click saluta

const helloBtn = document.getElementById("hello");
const helloText = document.getElementById("helloTxt");

// ho impostato un if e un else in maniera tale che quando il pulsante viene premuto spunta il messaggio
// al secondo clic ritorna come prima

let helloStatus = false;
helloBtn.addEventListener("click", function () {
  if (!helloStatus) {
    helloText.textContent = "ciao, benvenuto!";
    helloStatus = true;
  } else {
    helloText.textContent = ""; //resetta il click del button
    helloStatus = false;
  }
});

//   ------------------------------
// esercizio 2  - Al submit dell'utente il gestore di eventi deve leggere il valore dell'input dell'utente e visualizzarlo in un elemento di testo come un 'div' o un 'p'.

const formInput = document.getElementById("form-input");
const campoInput = document.getElementById("campo-input");
const btnSubmit = document.getElementById("btn-submit");
const textInput = document.getElementById("text-input");

formInput.addEventListener("submit", function (event) {
  event.preventDefault();

  const inputValore = campoInput.value;
  textInput.textContent = `ciao benvenuto nel sito: ${inputValore}`;

  campoInput.value = ""; // resetta il campo di input dopo l'invio
});

// Esercizio avanzato - l'elemento aggiunto deve contenere come "textContent" il valore dell'input inserito

const inputElement = document.getElementById("input-element");
const btnAdd = document.getElementById("btn-add");
const listElement = document.getElementById("list-element");

btnAdd.addEventListener("click", function () {
  const newElement = document.createElement("li");
  newElement.textContent = inputElement.value;
  listElement.appendChild(newElement);
  inputElement.value = "";
});
