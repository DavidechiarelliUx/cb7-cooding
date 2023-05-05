function calculateSum(x, y) {
    var sum = x + y; // la variabile 'sum' è definita all'interno della funzione e ha lo scope locale
    return sum;
  }
  
  console.log(calculateSum(3, 4)); // Output: 7
//   console.log(sum); // Errore: la variabile 'sum' non è definita in questo scope

  var greeting = "Ciao, mondo!"; // la variabile 'greeting' è definita al di fuori di qualsiasi funzione o blocco di codice e ha lo scope globale

function greet() {
  console.log(greeting);
}

greet(); // Output: Ciao, mondo!
console.log(greeting); // Output: Ciao, mondo!


function calcolaMedia(numeri) {
    var somma = 0;
    for (var i = 0; i < numeri.length; i++) {
      somma += numeri[i];
    }
    var media = somma / numeri.length;
    return media;
  }
  var numeri = [5, 10, 15, 20, 25];
var media = calcolaMedia(numeri);
console.log(media); // Output: 15

function calcolaProdotto(a, b) {
    var prodotto = a * b;
    return prodotto;
  }

  var num1 = 5;
var num2 = 10;
var prodotto = calcolaProdotto(num1, num2);
console.log(prodotto); // Output: 50



// esercizio 2

// let userNumber1 = parseInt(prompt("inserisci il primo numero"));
// let userNumber2 = parseInt(prompt("inserisci il secondo numero"));
// let userSign = prompt("inserisci un operatore matematico (+, *, :, -,) ");

// let result;

// switch (userSign) {
//     case "+":
//         result = userNumber1 + userNumber2;
//         break;
//     case "-":
//         result = userNumber1 - userNumber2;
//         break;
//     case "*":
//         result = userNumber1 * userNumber2;
//         break;
//     case "/":
//         result = userNumber1 / userNumber2;
//         break;
//     default:
//         console.log("operatore non valido");
// }

// console.log(userNumber1 + userSign + userNumber2 + "   il risultato è   " + result);





  