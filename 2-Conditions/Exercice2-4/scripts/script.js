// Exercice 2-4: Remise

let PU = window.prompt("Saisir prix unitaire: ")
let QTECOM = window.prompt("Saisir quantité commandé: ")
let PAP = PU * QTECOM

let PORT;
let REM;

let TOT = (PAP + PORT) - (PAP * REM)

console.log(PAP)

if (TOT > 500) {
    PORT = 0
} else {
    PORT = 6 + (TOT * 0.02) // PORT à 2% du TOT
}564

if (TOT > 100 && TOT < 200) {
   REM = 0.05 // REM à 5%
} else if (TOT > 200) {
    REM = 0.1 //REM à 10%
}



console.log(TOT)