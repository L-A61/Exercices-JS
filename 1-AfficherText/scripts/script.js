//Exercice 1: Alertes
let réponse1 = window.prompt("Quel est votre nom")
let réponse2 = window.prompt("Quel est votre prénom")
let réponse3 = window.confirm("Êtes vous un homme?")

if (réponse3 == true) {
    civilité = "Monsieur"
} else {
    civilité = "Madame"
}

let bienvenue = window.alert("Bonjour " + civilité + " " + réponse1 + " " + réponse2 + " Bienvue sur notre site web!")