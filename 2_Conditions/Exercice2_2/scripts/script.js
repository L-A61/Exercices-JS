//Exercice 2.2: Age
let yob = prompt("Votre année de naissance"); // Saisis de la date de naissance dans la variable yob
const presentDate = new Date(); // constante presentDate utilise l'objet Date()
const presentYear = presentDate.getFullYear(); // constante presentYear utilise la fonction getFullYear de l'objet Date() pour obtenir l'année actuel selon l'ordinateur.

age = presentYear - yob; // la variable âge se définit par le calcul de l'année actuel par l'année de naissance

if (age >= 18) { // Si la variable âge est à égal à 18 ou plus, une alerte dit que l'utilisateur est majeur, sinon une alerte dit que l'utilisateur est mineur, avec l'âge calculé affiché.
    alert("Vous avez " + age + " ans. Vous êtes majeur!");
} else {
    alert("Vous avez " + age + " ans. Vous êtes mineur!");
}