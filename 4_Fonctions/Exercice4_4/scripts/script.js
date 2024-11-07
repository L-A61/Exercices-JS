// Exercice 4.4: Menu

// Menu 1: Multiples
/**
 * 
 * @param {*} N 
 * @param {*} X 
 */
function multiple(N, X) {

    for (let i = 1; i <= N; i++) { // For loop continue jusqu'à ce que i atteint la valeur saisis de N
        let NX = i * X; // NX contient la multiplication de Multiplicande et Multiplicateur ensemble 
        console.log(i + " x " + X + " = " + NX); // multiplicande " x " Multiplicateur " = " NX
}
}

// Menu 2 Somme et moyenne
/**
 * 
 */
function sumAverage() {
    let nbCount = 0; // variable global pour le nombre de chiffre
    let nbSum = 0; // variable global pour la somme
    let nbInput; // variable global pour la saisis du nombre

    while(nbInput !== 0) {
        nbInput = parseFloat(prompt("Saisis un nombre (0 pour finir)")); // Saisis un nombre

        console.log(nbInput); // Affiche dans la console la saisis
        nbSum += nbInput; // la somme + la saisis
        nbCount++; // Augmentation du nombre de chiffre après la saisis 
    }

    let nbAverage = nbSum / nbCount; // Calcule la moyenne, somme / le nombre de chiffre saisis

    console.log("-----BREAK-----");

    console.log("Somme de la série: " + nbSum); // Affiche la somme de la série selon la valeur de la variable nbSum
    console.log("Moyenne de la série: " + nbAverage); // Affiche la somme de la série selon la valeur de la variable nbAverage
}

// Menu 3: Recherche du nombre de voyelles
/**
 * 
 * @param {*} word 
 */
function vowelCount(word) {
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
}

// Menu 4: Recherche du nombre des caracteres suivants
/**
 * 
 * @param {*} _phrase 
 * @param {*} _lettre 
 */
function letterCount(_phrase, _lettre) {
    let i_LettreCount = 0;
    for (let i = 0; i < _phrase.length; i++) {
        let i_CurrentIndex = _phrase.substring(i, i+1);

        if (_lettre.indexOf(i_CurrentIndex) !== -1) {
            i_LettreCount++;
        }
    }
    alert("Cette phrase contient "+i_LettreCount+" fois la lettre "+_lettre);
}

let choice = parseInt(prompt("1- Multiples\n2- Somme et moyenne\n3- Recherche du nombre de voyelles\n4- Recherche du nombre des caracteres suivants"));


switch(choice) {
     case 1:
         multiple(parseInt(prompt("Saisir le multiplicande")), parseFloat(prompt("Saisir le multiplicateur")));
         break;
     case 2:
         sumAverage();
         break;
     case 3:
         vowelCount(prompt("Sasir une phrase"));
         break;
    case 4:
        letterCount(prompt("Saisis une phrase"), prompt("Saisis un caractère"));
        break;
    default:
        break;

 }