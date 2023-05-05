// esercizio 2 Utilizzando le funzioni, riscrivere la calcolatrice creata durante l'esercitazione di giorno `03-05-2023`.

function sum(a, b) {
  return a + b;
}
function subtraction(a, b) {
  return a - b;
}
function multiplication(a, b) {
  return a * b;
}
function division(a, b) {
  return a / b;
}
let userNumber1 = parseInt(prompt("inserisci il primo numero"));
let userNumber2 = parseInt(prompt("inserisci il secondo numero"));
let userSign = prompt("inserisci un operatore matematico (+, *, :, -,) ");

let result;

switch (userSign) {
  case "+":
    result = userNumber1 + userNumber2;
    break;
  case "-":
    result = userNumber1 - userNumber2;
    break;
  case "*":
    result = userNumber1 * userNumber2;
    break;
  case "/":
    result = userNumber1 / userNumber2;
    break;
  default:
    console.log("operatore non valido");
}

console.log(
  userNumber1 + userSign + userNumber2 + "   il risultato è   " + result
);

// ---------------------------------------------

// esercizio 3
// Scrivere un oggetto che vi descriva, e stampare in console alcune di queste informazioni. Giusto per cominciare a prendere pratica con la sintassi e come richiamare valori di oggetti.

const bio = {
  name: "Davide",
  surname: "chiarelli",
  age: "23 years",
  address: "via cairo...",
  city: "rome",
  telephone_number: "3664367468",
};

const aspect = {
  hair: "castano",
  eyes: "marroni",
  weight: "75kg",
  height: "1.82m",
};

console.log(bio.name);
console.log(aspect.eyes);
console.log(bio.city);

// -----------------------------------------------------
// esercizio 4
// Riscrivere l'esercizio 2, utilizzando più funzioni combinate tra loro.
