// Exercice 3.3 : sommes des nombres inférieures à N

let N = parseInt(window.prompt("Entrez un nombre: "));
let sum = 0;

for (let i = N; i >= 0; i--) {
    sum += i;
}

console.log(sum);