// Exercice 3.7: Multiples

let N = parseInt(prompt("Saisir le multiplicande"));
let X = parseFloat(prompt("Saisir le multiplicateur"));


for (let i = 1; i <= N; i++) {
    let NX = i * X;
    console.log(i + " x " + X + " = " + NX);
}