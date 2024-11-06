// Exercice 2-4: Remise

let PU = parseFloat(prompt("Saisir prix unitaire: ")); // Saisis du prix unitaire dans la variable PU
let QTECOM = parseInt(prompt("Saisir quantité commandé: ")); // Saisis de la quantité commandé dans la variable QTECOM
let TOT = PU * QTECOM; // La variable TOT se définit par le calcul de la variable PU * la variable QTECOM

let PAP = 0; // Variable global du prix à payer
let PORT = 0; // Variable global du PORT
let REM = 0; // Variable global de la remise

if (TOT <= 500) { // Si la variable TOT est inférieur à 500, le PORT est 2% du TOT
    PORT = TOT * 0.02;
    if (PORT < 6) { // Si le PORT se trouve inférieur à 6, fixe le prix du PORT à;
        PORT = 6;
    }
}

if (TOT >= 100 && TOT <= 200) { // Si la variable TOT est entre 100 et 200, la remise est à 0.5% du TOT
    REM = TOT * 0.005;
} else if (TOT > 200) { // Si la variable TOT est strictement de 200, la remise est à 1% du TOT
    REM = TOT * 0.1;
}

PAP = TOT + PORT - REM; // La variable PAP se calcule par l'addition du total et du PORT moins la remise.

console.log("TOTAL: " + TOT); // Affiche le prix total selon la variable TOT
console.log("TOTAL: " + PORT); // Affiche le prix du port selon la variable PORT
console.log("TOTAL: " + REM); // Affiche la remise donné selon la variable REM
console.log("TOTAL: " + PAP); // Affiche le prix à payer selon la variable PAP