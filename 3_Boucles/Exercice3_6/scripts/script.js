// Exercice 3.6: Mini et maxi

let nbCount = 0; // Variable global pour le nombre de chiffre saisis
let nbSum = 0; // Variable global pour la somme des chiffres
let nbMin = 2 ** 53; // Valeur par défaut (2**53 est la valeur maximal possible sous JS)
let nbMax = 0; // Valeur par défaut 0 est la valeur minimal possible

while(true) {
    let nbInput = parseFloat(window.prompt("Saisis un nombre (0 pour finir)")); // saisis du chiffre

    if (nbInput === 0) { // Si la valeur de nb saisis est 0, arrête le while loop
        break;
    }

    console.log(nbInput); // Affiche sur la console la valeur de la variable nb saisis
    nbSum += nbInput; // Calcule la somme en additionnant la somme total avec le nouveau chiffre saisis 
    nbCount++; // Augmentation du nombre de chiffre après la saisis 

    if (nbInput < nbMin) {
        nbMin = nbInput; // Si la variable nbInput saisis est plus petit que la valeur nb minimum enregistré, remplace la valeur minimum par le nombre saisis
    }

    if (nbInput > nbMax) { // Si la variable nbInput saisis est plus grand que la valeur nb maximum enregistré, remplace la valeur maximal par le nombre saisis
        nbMax = nbInput;
    }
}

let nbAverage = nbSum / nbCount; // Variable calculant la moyenne en divisant la somme par le nombre total de chiffre saisis.

console.log("-----BREAK-----"); // Signal dans la console indicatif de la fin du while loop

console.log("Somme de la série: " + nbSum); // Affiche la somme de la série
console.log("Moyenne de la série: " + nbAverage); // Affiche la moyenne de la série
console.log("Minimum de la série: " + nbMin); // Affiche le minimum de la série
console.log("Maximum de la série: " + nbMax); // Affiche le maximum de la série