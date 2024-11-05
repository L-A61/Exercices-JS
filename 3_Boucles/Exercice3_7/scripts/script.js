// Exercice 3.7: Multiples

let N = parseInt(prompt("Saisir le multiplicande")); // Saisis du multiplicande
let X = parseFloat(prompt("Saisir le multiplicateur")); // Saisis du multiplicateur


for (let i = 1; i <= N; i++) { // For loop continue jusqu'à ce que i atteint la valeur saisis de N
    let NX = i * X; // NX contient la multiplication de Multiplicande et Multiplicateur ensemble 
    console.log(i + " x " + X + " = " + NX); // multiplicande " x " Multiplicateur " = " NX
}