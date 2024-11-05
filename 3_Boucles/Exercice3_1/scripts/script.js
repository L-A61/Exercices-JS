// Exercice 3.1: Saisie

let prénom;
let prénomCount = 0;

while (true) {
    prénom = window.prompt("Entrez prénom n°"+ (prénomCount += 1));
    
    if (prénom.trim() === "") { // prénom.trim() === "" compte, mais pas prénom === "" ni prénom == null
        break
    }
    
    console.log("prénom n°" + (prénomCount) + ": " + prénom);
}

console.log("BREAK");