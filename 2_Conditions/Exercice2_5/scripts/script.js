// Exercice 2-5: Participation

let married = confirm("L'employé est-il marié ?"); // Saisis de la variable married
let children = prompt("Combien d'enfant l'employé a-t-il ? (Nombre)"); // Saisis de la variable globale childnen
let salary = prompt("Quel est le salaire de l'employé ? (Nombre)"); // Saisis de la variable globale salary
let participation = 0; // Définition de la variable globale participation avec pour valeur 0

if (married == true) { // Si l'utilisateur confirme que l'employé est marrié, la valeur de la variable participation est à 25, sinon elle est à 20
    participation = 25;
} else {
    participation = 20;
}

for (let i = 0; i < children; i++) { // Tant que i est inférieur à la valeur children donné par l'utilisateur, la participation s'élève à 10 de plus à chaque boucle.
    participation += 10;
}

if (salary < 1200) { // Si le salaire est inférieur à 1200, la participation augmente de 10
    participation += 10;
}

if (participation >= 50) { // Plafonne la variable participation à 50 si la valeur est au dessus ou égal à 50
    participation = 50;
} 

alert("Ce salarié à le droit à " + participation + "% de participation !"); // Alerte affichant combien en pourcentage de particpation l'employé à le droit.