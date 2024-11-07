// Exercice 5.1: Saisie d'un tableau

let myTableSize = parseInt(prompt("Saisir la taille du tableau"));
let myTable = [];

for (let i = 0; i < myTableSize; i++) {
    let myTableValue = prompt("Saisir une valeur")
    myTable.push(myTableValue)
    console.log(myTable)
}