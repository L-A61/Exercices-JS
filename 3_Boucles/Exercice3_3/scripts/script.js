// Exercice 3.3 : sommes des nombres inférieures à N

let N = parseInt(prompt("Entrez un nombre: ")); // Saisis la valeur de de la variable N
let sum = 0; // Valeur global de la variable sum fixé à 0 par défaut

for (let i = N; i >= 0; i--) { // la valeur de la variable i est la valeur de la variable N, tant que i est supérieur ou égal à 0, additionne la variable sum par i. On retire une valeur à i chaque boucle 
    sum += i;
}

console.log(sum); // Affiche la somme dans la console.