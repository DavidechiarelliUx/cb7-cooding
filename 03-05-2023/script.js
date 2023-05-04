// esercizio 1

// let userNumber = prompt("Inserisci un numero");

// if(userNumber % 2 === 0) {
//   console.log(userNumber + " è un numero pari");
// } else {
//   console.log(userNumber + " è un numero dispari");
// }

//esercizio 2

// let userNumber2 = prompt("Inserisci un numero");
// (userNumber2 % 2 === 0)
//  ? console.log(userNumber2 + " è un numero pari") 
//  : console.log(userNumber2 + " è un numero dispari");

// esercizio 3

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

console.log(userNumber1 + userSign + userNumber2 + "   il risultato è   " + result);




