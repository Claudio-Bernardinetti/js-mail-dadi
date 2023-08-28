/* Gioco dei dadi

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

// Stabilire il vincitore, in base a chi fa il punteggio più alto. 
//(Fare un if/else per comparare i risultati e stabilire il vincitore o pareggio).

if (numberPlayer > numberPc) {
    console.log(`Ha vinto Claudio 🏆`);
} else if (numberPc > numberPlayer) {
    console.log(`Ha vinto il PC 🏆`);
} else {
    console.log(`Nessuno dei due ha vinto, provate ancora`);
}


///////////////////////////////////////////
// eMail

// Crea lista nomi eMail.

let usersEmail = ['claudio@gmail', 'marco@gmail', 'daniela@gmail', 'francesca@gmail'];

// Chiedi all'utente la sua email.

const askUserEmail = prompt(`Inserisci la tua eMail`)
const answer = document.querySelector('.risposta')

// Controlla che sia nella lista.

 for (let index = 0; index < usersEmail.length; index++) {
    let element = usersEmail[index];
    //console.log(element);

   // Stampa un messaggio appropriato sull’esito del controllo.

    if (askUserEmail && !element) {
        console.log(`L'indirizzo eMail selezionato e' nella tua lista`);
        answer.innerHTML = `L'indirizzo eMail selezionato e' nella tua lista`;

    } else {
        console.log(`L'indirizzo eMail selezionato non e' nella tua lista`);
        answer.innerHTML = `L'indirizzo eMail selezionato non e' nella tua lista`;
    }
    
} 



