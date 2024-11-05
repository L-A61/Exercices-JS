// Exercice 3.8: Nombre de voyelles

let word = prompt("Sasir un mot ou une phrase");
let vowel = "aeiouAEIOU";
let vowelCount = 0;

for (let i = 0; i < word.length; i++) {
    let currentIndex = word.substring(i, i + 1);
    if (vowel.indexOf(currentIndex) !== -1) {
        vowelCount++;
    }
}

console.log("Saisis: " + word)
console.log("Nombre de voyelles: " + vowelCount)