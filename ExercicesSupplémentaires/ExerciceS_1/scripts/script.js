// Exercice S.1: Catégorie âge

let i_Age = prompt("Saisir l'âge de l'enfant"); // Saisis la valeur de la variable i_Age

if (i_Age >= 6 && i_Age <= 7) { // Si la variable i_Age est entre 6 et 7, alerte catégorie poussin
    alert(i_Age + " ans: Catégorie Poussin");
} else if (i_Age >= 8 && i_Age <= 9) { // Si la variable i_Age est entre 8 et 9, alerte catégorie pupille
    alert(i_Age + " ans: Catégorie Pupille");
} else if (i_Age >= 10 && i_Age <= 11) { // Si la variable i_Age est entre 10 et 11, alerte catégorie minime
    alert(i_Age + " ans: Catégorie Minime");
} else if (i_Age >= 12) { // Si la variable i_Age est 12 ou plus, alerte catégorie Cadet
    alert(i_Age + " ans: Catégorie Cadet");
} else { // Si la variable i_Age ne remplie aucune des conditions, alerte aucune catégorie trouvé
    alert(i_Age + " ans: Aucune catégorie trouvé. Essayez à partir de 6 ans");
}