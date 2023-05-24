// let persona = ["Davide", "Chiarelli", "Italia"];

// let [nome, cognome, paese] = persona;

// console.log(nome);   
// console.log(cognome); 
// console.log(paese);  

// let libro = {
//     titolo: "Il Nome della Rosa",
//     autore: "Umberto Eco",
//     anno: 1980
//   };
  
//   let { titolo, autore, anno } = libro;
  
//   console.log(titolo); 
//   console.log(autore);  
//   console.log(anno);   

//   avanzato

let persona = ["Davide", "Chiarelli",];

let [nome, cognome, paese = "Non specificato"] = persona;

console.log(nome);   
console.log(cognome); 
console.log(paese);  


let libro = ["il nome della rosa", "umberto eco "];

let [titolo, autore, anno= "non specificato..."] = libro;

console.log (titolo);
console.log(autore);
console.log (anno);

// avanzato 2 

