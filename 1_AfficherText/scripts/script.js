//Exercice 1: Alertes
let réponse1 = prompt("Quel est votre nom"); // Saisis du nom dans la variable réponse1
let réponse2 = prompt("Quel est votre prénom"); // Saisis du prénom dans la variable réponse2
let réponse3 = confirm("Êtes vous un homme?"); // Demande un true ou false si on est un homme ou une femme pour la variable réponse3

if (réponse3 == true) { // Si  la variable réponse3 est vrai, la variable civilité a pour valeur Monsieur, sinon Madame
    civilité = "Monsieur";
} else {
    civilité = "Madame";
}

alert("Bonjour " + civilité + " " + réponse1 + " " + réponse2 + " Bienvue sur notre site web!"); // Alerte affichant la phrase "Bonjour (civilité) (réponse1) (réponse2) Bienvenue sur notre site web!"