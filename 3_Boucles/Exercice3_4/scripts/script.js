// Exercice 3.4 : sommes des intervalles de n1 à n2

let n1 = parseInt(prompt("Entrez un premier nombre: ")); // Saisis la valeur de de la variable n1
let n2= parseInt(prompt("Entrez un deuxième nombre: ")); // Saisis la valeur de de la variable n2
let sum = 0; // Valeur global de la variable sum fixé à 0 par défaut

for (let i = n1; i <= n2; i++) { // La valeur de la variable i est la valeur de n1, tant que i est inférieur ou égale à la variable n2, on additionne la variable sum avec la variable i. i +1 à chaque boucle
    sum += i;
    console.log(sum) // Affiche la valeur de la variable sum actuel dans la console avant de reprendre la boucle au début.
}

console.log("Résultat final: " + sum); // Affiche le résultat final sur la console