// Exercice 3.9: Calcul nombre de jeune, moyens et âgés

let i_Young = 0; // Variable global pour les âges "jeunes"
let i_Average = 0; // Variable global pour les âges "moyens"
let i_Elderly = 0; // Variable global pour les âges "vieux"
let i_Age = 0;

while(i_Age < 100) { // While existe tant que l'âge saisis est inférieur à 100
    i_Age = prompt("Saisir un âge (un âge supérieur ou égal à 100 pour finir)"); // Saisis de l'âge

    if (i_Age < 20) { // Si l'âge est en dessous de 20, variable i_Young augmente de 1
        i_Young++;
    } else if (i_Age >= 20 && i_Age <= 40) { // Si l'âge est entre 20 et 40, variable i_Average augmente de 1
        i_Average++;
    } else if (i_Age > 40) { // Si l'âge est au dessus de 40, variable i_Elderly augmente de 1
        i_Elderly++;
    }
}

console.log("N° de jeunes: " + i_Young); // Affiche le nombre d'âge "jeune" saisis
console.log("N° d'âges moyens': " + i_Average); // Affiche le nombre d'âge "moyen" saisis
console.log("N° de personnes âgés: " + i_Elderly); // Affiche le nombre d'âge "vieux" saisis