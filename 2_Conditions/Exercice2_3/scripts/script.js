// Exercice 2.3: Calculette

let chiffre1 = parseInt(prompt("Entrez un premier chiffre")); // Saisis du premier chiffre comme valeur de la variable chiffre1
let operateur = prompt("Entrez un opérateur (+, -, * ou /) "); // Saisis de l'opérateur comme valeur de la variable operateur
let chiffre2 = parseInt(prompt("Entrez un deuxième chiffre")); // Saisis du deuxième chiffre comme valeur de la variable chiffre2

if (operateur === "+") { // Addition chiffre1 + chiffre2 si la valeur de l'opérateur est + (+ affichage résultat)
    resultat = parseInt(chiffre1) + parseInt(chiffre2);
    alert(resultat);
} else if (operateur === "-") { // Soustraction chiffre1 - chiffre2 si la valeur de l'opérateur est - (+ affichage résultat)
    resultat = parseInt(chiffre1) - parseInt(chiffre2);
    alert(resultat);
} else if (operateur === "*") { // Multiplication chiffre1 * chiffre2 si la valeur de l'opérateur est * (+ affichage résultat)
    resultat = parseInt(chiffre1) * parseInt(chiffre2);
    alert(resultat);
} else if (operateur === "/") { // Division chiffre1 / chiffre2 si la valeur de l'opérateur est / (+ affichage résultat)
    resultat = parseInt(chiffre1) / parseInt(chiffre2);
    alert(resultat);
    if (chiffre2 === 0) { // Si le chiffre2 est 0 durant une division, affiche un message d'erreur
        alert("Erreur, impossible de diviser par 0");
    }
}
