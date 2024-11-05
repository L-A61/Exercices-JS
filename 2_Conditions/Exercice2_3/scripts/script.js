// Exercice 2.3: Calculette

let chiffre1 = window.prompt("Entrez un premier chiffre")
let operateur = window.prompt("Entrez un opérateur")
let chiffre2 = window.prompt("Entrez un deuxième chiffre")

if (operateur === "+") {
    resultat = parseInt(chiffre1) + parseInt(chiffre2);
} else if (operateur === "-") {
    resultat = parseInt(chiffre1) - parseInt(chiffre2);
} else if (operateur === "*" || "x") {
    resultat = parseInt(chiffre1) * parseInt(chiffre2);
} else if (operateur === "/") {
    resultat = parseInt(chiffre1) / parseInt(chiffre2);
}

if (operateur === "/" && chiffre2 === "0") {
    window.alert("Error")
}

window.alert(resultat)