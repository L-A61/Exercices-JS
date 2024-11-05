// Exercice 3.8: Nombre de voyelles

let word = prompt("Sasir un mot ou une phrase"); // Saisis du mot / phrase pour l'algorithme
let vowel = "aeiouyAEIOUY"; // liste de voyelle à l'attention de l'algorithme
let vowelCount = 0; // variable global pour la compte de voyelle détecté

for (let i = 0; i < word.length; i++) { // i est la position du caractère lu par le code et s'arrête à la fin du mot
    let currentIndex = word.substring(i, i + 1); // Variable qui lit le mot depuis sa position i et s'arrête avant la lecture du caractère voisin

    if (vowel.indexOf(currentIndex) !== -1) { // Si l'index de currentIndex trouve une voyelle dans la liste de voyelle, augmente le compte de voyelle détecté.
        vowelCount++;
    }
}

console.log("Saisis: " + word); // Mot saisis
console.log("Nombre de voyelles: " + vowelCount); // Compte final de voyelles détecté par l'algorithme