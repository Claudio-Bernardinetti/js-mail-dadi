/* Gioco dei dadi

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?

Mail
Chiedi all'utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

Bonus
Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.

Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
si ma noi cosa vogliamo fare?
torniamo a scrivere in italiano
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano" */

//////////////////////////////////////////////////////////

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 
// (Fare due cost, una per il player e un per il pc, con all' interno la lista dei numeri).
 



const numberPlayer = `${Math.floor(Math.random() * 6) + 1}`;
const numberPc = `${Math.floor(Math.random() * 6) + 1}`;

if (numberPlayer > numberPc) {
    console.log(`Ha vinto Claudio 🏆`);
} else if (numberPc > numberPlayer) {
    console.log(`Ha vinto il PC 🏆`);
} else {
    console.log(`Nessuno dei due ha vinto, provate ancora`);
}


////////////////////////////
let numbers = [1, 2, 3, 4, 5, 6];
let player;
let pc;

console.log(numbers.length);


let numbersRandom = Math.floor(Math.random());

/* for (let index = 0; index < numbers.length; index++) {
    let number = numbers[index];
    console.log(numbersRandom);


} */
//numbers = `${Math.floor(Math.random('numbers.length') )}`;


// Stabilire il vincitore, in base a chi fa il punteggio più alto. 
//(Fare un if/else per comparare i risultati e stabilire il vincitore o pareggio).