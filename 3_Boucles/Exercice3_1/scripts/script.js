// Exercice 3.1: Saisie

let prénom;

while (true) {
    prénom = window.prompt("Entrez un prénom: ")
    
    if (prénom.trim() === "") { // prénom.trim() === "" compte, mais pas prénom === "" ni prénom == null
        break
    }
    
    console.log(prénom)
}

console.log("BREAK")