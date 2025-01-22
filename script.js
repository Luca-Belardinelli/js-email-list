// Attraverso l’apposita API di Boolean
// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

// varibiale per richiamare il contenitore scritto in html
const randomEmail = document.getElementById('result');

//creo array vuoto per contenere l email generate
let gMail = [];

// creo ciclo per le 10 random email
for ( let i = 0; i <= 10; i++){
    // chiamata API per generare un email
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then(response => {
        //codice da eseguire in caso di successo
        const risultato = response.data.response
        // inserisco nell'array la variabile risultato 
        gMail.push(risultato);
        //stampo in pagina la lista
        randomEmail.innerHTML += `<li>${risultato}</li>`;
    })

}


console.log(gMail);