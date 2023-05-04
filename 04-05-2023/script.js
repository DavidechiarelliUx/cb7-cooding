// # Esercizio 1

// Scrivere un piccolo script javascript che inverta un array senza utilizzare il metodo `reverse()`.


let myArray1 = ["uno", 2, "tre", 4, "cinque"]; 
// let newArray = []; 

for (let index = myArray1.length - 1; index >= 0; index--) { 
  myArray1.push(myArray1[index]);   
}  

console.log(myArray1);



// con più array mi riesce meglio 

let myArray = ["uno", 2, "tre", 4, "cinque"]; 
let newArray = []; 

for (let index = myArray.length - 1; index >= 0; index--) { 
  newArray.push(myArray[index]);   
}  

console.log(newArray);




// # Esercizio 2

// Dato un array di numeri, stampare il velore minimo e massimo

let array = [32, 43, 65, 23, 98, 123, 45];
let max = array[0];

for (let item of array) {
    if (max < item) {
        max = item;
    }
}

let min = array[0];

for (let item of array) {
    if (min > item) {
        min = item; 
    }
}

console.log("Il più piccolo è: " + min);
console.log("Il più grande è: " + max);




