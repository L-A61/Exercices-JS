// Exercice 3.5: Moyenne

let nbCount = 0;
let nbSum = 0;

while(true) {
    let nbInput = parseFloat(prompt("Saisis un nombre (0 pour finir)"));

    let nb = parseFloat(nbInput);

    if (nb === 0) {
        break;
    }
    console.log(nb)
    nbSum += nb;
    nbCount++;
}

let nbAverage = nbSum / nbCount;

console.log("-----BREAK-----");

console.log("Somme de la série: " + nbSum);
console.log("Moyenne de la série: " + nbAverage);