// Exercice 3.1: Saisie

let prénom; // Variable globale pour numéroté 
let prénomCount = 0; // Variable globale pour numéroté les saisies

while (true) {
    prénom = prompt("Entrez prénom n°"+ (prénomCount += 1)); // Saisis des prénoms (numérotation pour dire quel est le premier, deuxième, troisième...) 
    
    // Si rien n'est rentré dans la saisie, le while s'arrête
    if (prénom.trim() === "") { // prénom.trim() === "" compte, mais pas prénom === "" ni prénom == null 
        break;
    }
    
    // Affiche les prénoms, numéroté par ordre de saisie
    console.log("prénom n°" + (prénomCount) + ": " + prénom);
}