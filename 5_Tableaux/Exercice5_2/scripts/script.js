// Exercice 5.2: Tableau avec fonction

// Lit un entier
function GetInteger() {

}

//Initialiser une instance de tableau
function IniTab() {

}

//Saisir un poste de tableau
function SaisieTab() {

}

//Affiche les postes de tableau
function AfficheTab() {

}

//Affiche le contenu d'un poste saisi
function RechercheTab() {

}

//Affiche le maximum et la moyenne des postes
function InfoTab() {

}

GetInteger()
IniTab()
SaisieTab()

let choice = parseInt(prompt("Choisis quel fonction utiliser:\n1- Affiche les postes du tableau\n2- Recherche un poste du tableau\n3- Affiche le maximum et la moyenne des postes"))

switch(choice) {
    case 1:
        AfficheTab();
        break;
    case 2:
        RechercheTab();
        break;
    case 3:
        InfoTab();
        break;
}