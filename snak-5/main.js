/* 
Crea due array che hanno un numero di elementi diversi. 
Aggiungi elementi all’array che ha meno elementi 
fino a quando ne avrà tanti quanti l’altro.
 */

let firstArray = [1, 23, 4, 56, 77, 14, 2, 33, 6, 5, 8];
let secondArray = [1, 23, 4];
let i = 0;
console.log(`Lunghezza iniziale prima lista: ${firstArray.length}`);
console.log(`Lunghezza iniziale seconda lista: ${secondArray.length}`);
do {
    secondArray.push(i);
    i++;
} while (firstArray.length !== secondArray.length);

console.log(`Lunghezza finale prima lista: ${firstArray.length}`);
console.log(`Lunghezza finale seconda lista: ${secondArray.length}`);