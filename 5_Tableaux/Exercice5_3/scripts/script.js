// Exercice 5.3: 20 prénoms, 1 intrus

myInputTable = prompt("Saisis un nom");

let myTable = ["a","b","c","d","e","f","g","h","i","j","k",myInputTable,"l","m","n","o","p","q","r","s","t","u"];



for (let i = 0; i<myTable.length; i++) {
    if (myTable[i] === myInputTable) {
        console.log("intruder detected");
        myTable.splice(i,1);
    }
}

console.log(myTable);