// Exercice 3.4 : sommes des nombres inférieures à N

let n1 = parseInt(window.prompt("Entrez un premier nombre: "));
let n2= parseInt(window.prompt("Entrez un deuxième nombre: "));
let sum = 0;

for (let i = n1; i <= n2; i++) {
    sum += i;
}

console.log(sum);