// Exercice 2-4: Remise

let PU = parseFloat(prompt("Saisir prix unitaire: "));
let QTECOM = parseInt(prompt("Saisir quantité commandé: "));
let TOT = PU * QTECOM;

let PAP = 0;
let PORT = 0;
let REM = 0;

if (TOT <= 500) {
    PORT = TOT * 0.02;
    if (PORT < 6) {
        PORT = 6;
    }
}

if (TOT >= 100 && TOT <= 200) {
    REM = TOT * 0.005;
} else if (TOT > 200) {
    REM = TOT * 0.1;
}

PAP = TOT + PORT - REM;

console.log("TOTAL: " + TOT);
console.log("TOTAL: " + PORT);
console.log("TOTAL: " + REM);
console.log("TOTAL: " + PAP);