/* 
Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo.
*/

let userNumber = parseInt(prompt('Inserisci un numero'));
let i = 0;
if (userNumber % 2 !== 0) {
    console.log(userNumber + 1);
} else {
    console.log(userNumber);
}