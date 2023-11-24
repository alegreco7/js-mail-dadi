// Funzione per generare un numero random da 1 a 6

function lancioDado() {
    return Math.floor(Math.random() * 6) + 1;
}
    
// Funzione per determinare il vincitore
function determinaVincitore(giocatore, computer) {
  if (giocatore > computer) {
    return "Giocatore";
  } else if (computer > giocatore) {
    return "Computer";
  } else {
    return "Pareggio";
  }
}
  
// Lancio dei dadi per giocatore e computer

let dadoGiocatore = lancioDado();
let dadoComputer = lancioDado();
  
// Stampa dei risultati

console.log("Giocatore: " + dadoGiocatore);
console.log("Computer: " + dadoComputer);
  
// Determina il vincitore

let vincitore = determinaVincitore(dadoGiocatore, dadoComputer);
  
// Stampa del vincitore

console.log("Il vincitore è: " + vincitore);
  