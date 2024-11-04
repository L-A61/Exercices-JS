// Exercice 2-5: Participation

let married = window.confirm("L'employé est-il marié ?");
let children = window.prompt("Combien d'enfant l'employé a-t-il ? (Nombre)");
let salary = window.prompt("Quel est le salaire de l'employé ? (Nombre)");
let participation = 0;

if (married == true) {
    participation = 25;
} else {
    participation = 20;
}

// Insérer for loop pour les enfants, +10 de participation par enfant

for (let i = 0; i < children; i++) {
    participation += 10;
}

if (salary < 1200) {
    participation += 10;
}

if (participation >= 50) {
    participation = 50;
} 

console.log("Ce salarié à le droit à " + participation + "% de participation !");