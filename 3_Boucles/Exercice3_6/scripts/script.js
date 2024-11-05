// Exercice 3.6: Mini et maxi

let nbCount = 0;
let nbSum = 0;
let nbMin = 2 ** 53;
let nbMax = 0;

while(true) {
    let nbInput = parseFloat(window.prompt("Saisis un nombre (0 pour finir)"));

    let nb = parseFloat(nbInput);

    if (nb === 0) {
        break;
    }

    console.log(nb);
    nbSum += nb;
    nbCount++;

    if (nb < nbMin) {
        nbMin = nb;
    }

    if (nb > nbMax) {
        nbMax = nb;
    }
}

let nbAverage = nbSum / nbCount;

console.log("BREAK")

console.log("Somme de la série: " + nbSum);
console.log("Moyenne de la série: " + nbAverage);
console.log("Minimum de la série: " + nbMin);
console.log("Maximum de la série: " + nbMax);