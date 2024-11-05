// Exercice 3.5: Moyenne

// A refaire avec un while

while(true) {
    let Nb = parseInt(window.prompt("Saisis un nombre"))

    if (Nb === 0) {
        break
    }
    console.log(Nb)
}

console.log("BREAK")


/* let n1 = parseInt(window.prompt("Entrez un premier nombre: "));
let n2= parseInt(window.prompt("Entrez un deuxième nombre: "));
let nombreNb = 2;
let sum = 0;
let average = 0;

for (let i = n1; i <= n2; i++) {
    sum += i;
    average = (n1 + n2) / nombreNb;
}

console.log(sum);
console.log(average); */