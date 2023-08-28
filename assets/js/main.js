/* 
Bonus
Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.
 */

//////////////////////////////////////////////////////////

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 
// (Fare due cost, una per il player e un per il pc, con all' interno la lista dei numeri).

document.querySelector('.genera_game').addEventListener('click', ()=> {
 
    const numberPlayer = Math.floor(Math.random() * 6) + 1;
    const numberPc = Math.floor(Math.random() * 6) + 1;
    let printWinner = document.querySelector('.risultatoGame')
    // Stabilire il vincitore, in base a chi fa il punteggio più alto. 
    //(Fare un if/else per comparare i risultati e stabilire il vincitore o pareggio).

    if (numberPlayer > numberPc) {
        console.log(`Ha vinto Claudio con il punteggio di ${numberPlayer} vs ${numberPc} 🏆`);
        printWinner.innerHTML = `Ha vinto Claudio con il punteggio di ${numberPlayer} vs ${numberPc} 🏆`

    } else if (numberPc > numberPlayer) {
        console.log(`Ha vinto il PC con il punteggio di ${numberPc} vs ${numberPlayer} 🏆`);
        printWinner.innerHTML = `Ha vinto il PC con il punteggio di ${numberPc} vs ${numberPlayer} 🏆`

    } else {
        console.log(`Nessuno dei due ha vinto, provate ancora`);
        printWinner.innerHTML = `Nessuno dei due ha vinto, provate ancora`
    }

})

///////////////////////////////////////////
// eMail

// Crea lista nomi eMail.
document.querySelector('.genera_email').addEventListener('click', ()=> {

    // Crea lista nomi eMail.

    let usersEmail = ['claudio@gmail', 'marco@gmail', 'daniela@gmail', 'francesca@gmail'];

    // Chiedi all'utente la sua email.

    const askUserEmail = document.querySelector('.nomeEmail').value;
    console.log(askUserEmail);
    const answer = document.querySelector('.risposta')

    // Controlla che sia nella lista.
    
    let inTheList = false;

    for (let index = 0; index < usersEmail.length; index++) {
        
    // Stampa un messaggio appropriato sull’esito del controllo.

        if (askUserEmail == usersEmail[index]) {
            console.log(`L'indirizzo eMail selezionato e' nella tua lista`);
            
            answer.innerHTML = `L'indirizzo eMail selezionato e' nella tua lista`;

            inTheList = true;
            
        } 

    }

    if (inTheList == false) {
        console.log(`L'indirizzo eMail selezionato non e' nella tua lista`);
        answer.innerHTML = `L'indirizzo eMail selezionato non e' nella tua lista`;
    }

})