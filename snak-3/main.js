/* 
Generatore di “nomi cognomi” casuali: 
il Grande Gatsby ha una lista di nomi e una lista di cognomi,
e da queste vuole generare una falsa lista di invitati con nome e cognome.
 */

let firstName = ['Mattia', 'Paolo', 'Franco', 'Anna', 'Chiara'];
let lastName = ['Abbondanza', 'Baldi', 'Costa', 'Esposito', 'Giordano'];
let fakeList = [];

for (let i = 0; i < firstName.length; i++) {
    fakeList.push(firstName[i].concat(lastName[lastName.length - i - 1]));
}

console.log(fakeList);