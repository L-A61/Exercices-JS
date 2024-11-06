// Exercice 3.2 : nombres inférieures à N

let N = prompt("Entrez un nombre: "); // Saisie du nombre

for (let i = N; i >= 0; i--) { // i est le nombre saisie, tant que i est supérieur ou égal à 0, la boucle continue, on soustrait i par 1 à chaque boucle
    console.log(i); // Affiche i chaque boucle
}