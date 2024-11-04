//Exercice 2.2: Age
let yob = window.prompt("Votre année de naissance")

age = 2024 - yob

if (age >= 18) {
    window.alert("Vous avez " + age + " ans. Vous êtes majeur!")
} else {
    window.alert("Vous avez " + age + " ans. Vous êtes mineur!")
}