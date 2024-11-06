// Exercice 3.5: Moyenne

let nbCount = 0; // variable global pour le nombre de chiffre
let nbSum = 0; // variable global pour la somme
let nbInput; // variable global pour la saisis du nombre

while(nbInput !== 0) {
    nbInput = parseFloat(prompt("Saisis un nombre (0 pour finir)")); // Saisis un nombre

    console.log(nbInput); // Affiche dans la console la saisis
    nbSum += nbInput; // la somme + la saisis
    nbCount++; // Augmentation du nombre de chiffre après la saisis 
}

let nbAverage = nbSum / nbCount; // Calcule la moyenne, somme / le nombre de chiffre saisis

console.log("-----BREAK-----");

console.log("Somme de la série: " + nbSum); // Affiche la somme de la série selon la valeur de la variable nbSum
console.log("Moyenne de la série: " + nbAverage); // Affiche la somme de la série selon la valeur de la variable nbAverage