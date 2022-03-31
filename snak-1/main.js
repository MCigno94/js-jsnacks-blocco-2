/* 
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.
*/

let numberUser;
let somma = 0;
let i = 1;

while (i <= 5) {
    numberUser = Number(prompt('Inserisci un numero'));
    somma += numberUser;
    i++;
}

console.log(`La somma dei 10 numeri inseriti è: ${somma}`);

// ciclo for

/* let numberUser1;
let somma1 = 0;
for (let x = 1; x <= 5; x++) {
    numberUser1 = Number(prompt('Inserisci un numero'));
    console.log(`n°${x}: ${numberUser1}`);
    somma1 += numberUser1;
}

console.log(`La somma dei 10 numeri inseriti è: ${somma1}`); */