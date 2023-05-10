// esercizio 1
// Sulla base della lezione del giorno, cominciare a prendere confidenza con le callbacks, cercare sulla rete documentazione a riguardo e dare più forma teorica al concetto.
// const sum = (num1, num2) => num1+num2 ;
// const yoursum = (yourName, yourFunc) => {
//     return (yourName+''+yourFunc);

// }
// console.log (yoursum('davide',sum(7,18)));

// const sot = (num1,num2) => num1-num2;
// const calculator = (operationFn) => {
//    let x= 900;
//     return operationFn (x,150);
// }
// console.log (calculator(sot));

// Esercizio 2

// Utilizzando callbacks, ricreare la calcolatrice in forma base includento il DOM, pertanto non avremo più i risultati via console, ma direttamente renderizzati sulla pagina (qualunque interpretazione qui va bene, e qualunque grado di complessità verrà valutato positivamente, per es. potrete avere anche un solo operatore e due valori da sommare)
// const resultEl = document.querySelector(".calcolatrice");

const schermo = document.querySelector(".schermo");
const btnNum = document.querySelectorAll(".btnNum");
const btnSomma = document.querySelector(".btnSomma");
const btnUguale = document.querySelector(".btnUguale");
const reset = document.querySelector(".reset");

let valore1 = "";
let valore2 = "";
let operatore = null;

function aggiornaSchermo(valore) {
  schermo.value = valore;
}

const calcolaRisultato = (num1, num2, operazioneFn) => operazioneFn(num1, num2);

btnNum.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (operatore === null) {
      valore1 += btn.textContent;
      aggiornaSchermo(valore1);
    } else {
      valore2 += btn.textContent;
      aggiornaSchermo(valore2);
    }
  });
});

btnSomma.addEventListener("click", () => {
  operatore = "+";
});

btnUguale.addEventListener("click", () => {
  const risultato = calcolaRisultato(
    parseFloat(valore1),
    parseFloat(valore2),
    (num1, num2) => num1 - num2
  );
  valore1 = risultato.toString();
  valore2 = "";
  operatore = null;
  aggiornaSchermo(risultato);
});

reset.addEventListener("click", () => {
  valore1 = "";
  valore2 = "";
  operatore = null;
  aggiornaSchermo("");
});
