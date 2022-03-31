/* 
Crea un array di numeri interi
e fai la somma di tutti gli elementi che sono in posizione dispari
*/

let listNumber = [2, 7, 16, 24, 9, 13, 10, 20, 1, 5];
let sum = 0;

for (let i = 1; i < listNumber.length; i += 2) {
    sum += listNumber[i];
    console.log(listNumber[i]);
}

console.log(sum);