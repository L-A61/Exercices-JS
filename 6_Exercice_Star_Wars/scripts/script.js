// Exercice: Star Wars

const personnages = [
     { nom: "Luke Skywalker", espece: "humain", affiliation: "Jedi"},
     { nom: "Darth Vader", espece: "humain", affiliation: "Sith"},
     { nom: "Yoda", espece: "Yoda's species", affiliation: "Jedi"},
     { nom: "Obi-Wan Kenobi", espece: "humain", affiliation: "Jedi"},
     { nom: "Palpatine", espece: "humain", affiliation: "Sith"},
     { nom: "Darth Plagueis", espece: "Muun", affiliation: "Sith"},
]

// Menu 1: Filtre par affiliation
function filtreAffiliation(_choixAffiliation) {
    if (_choixAffiliation === "Jedi") {
        personnages.forEach(personnage => {
            if (personnage.affiliation === "Jedi") {
                console.log(`Nom: ${personnage.nom}, Espèce: ${personnage.espece}, Affiliation: ${personnage.affiliation}`);
            }
        });
    } else if (_choixAffiliation === "Sith") {
        personnages.forEach(personnage => {
            if (personnage.affiliation === "Sith") {
                console.log(`Nom: ${personnage.nom}, Espèce: ${personnage.espece}, Affiliation: ${personnage.affiliation}`);
            }
        });
    } else {
        alert("Affiliation introuvable");
    }
}

// Menu 2: Filtre par nom de personnage
function nomPersonnage(_choixNom) {
    if (_choixNom === "Luke Skywalker") {
        personnages.forEach(personnage => {
            if (personnage.nom === "Luke Skywalker") {
                console.log(`Nom: ${personnage.nom}, Espèce: ${personnage.espece}, Affiliation: ${personnage.affiliation}`);
            }
        });
    } else if (_choixNom === "Darth Vader") {
        personnages.forEach(personnage => {
            if (personnage.nom === "Darth Vader") {
                console.log(`Nom: ${personnage.nom}, Espèce: ${personnage.espece}, Affiliation: ${personnage.affiliation}`);
            }
        });
    } else if (_choixNom === "Yoda") {
        personnages.forEach(personnage => {
            if (personnage.nom === "Yoda") {
                console.log(`Nom: ${personnage.nom}, Espèce: ${personnage.espece}, Affiliation: ${personnage.affiliation}`);
            }
        });
    } else if (_choixNom === "Obi-Wan Kenobi") {
        personnages.forEach(personnage => {
            if (personnage.nom === "Obi-Wan Kenobi") {
                console.log(`Nom: ${personnage.nom}, Espèce: ${personnage.espece}, Affiliation: ${personnage.affiliation}`);
            }
        });
    } else if (_choixNom === "Palpatine") {
        personnages.forEach(personnage => {
            if (personnage.nom === "Palpatine") {
                console.log(`Nom: ${personnage.nom}, Espèce: ${personnage.espece}, Affiliation: ${personnage.affiliation}`);
            }
        });
    } else if (_choixNom === "Darth Plagueis") {
        personnages.forEach(personnage => {
            if (personnage.nom === "Darth Plagueis") {
                console.log(`Nom: ${personnage.nom}, Espèce: ${personnage.espece}, Affiliation: ${personnage.affiliation}`);
            }
        });
    } else {
        alert("Nom introuvable");
    }
}

// Menu 3: Compte le nombre de personnage
function nomTotal() {
    let nameCount = 0;
    personnages.forEach(personnage => {
        if (personnage.nom.trim()) {
            nameCount++;
            console.log(`${personnage.nom}`);
        }
    })
    alert("Il y a "+nameCount+" personnages dans cette liste");
}

// Menu 4: Vérification de la présence d'un personnage
function personnagePrésent(_personnage) {
    for (let i = 0; i < personnages.length; i++) {
        if (personnages[i].nom === _personnage) {
            return alert("Ce personnage existe");
        }
    }
    return alert("Ce personnage n'existe pas");
    
}


let choix;

do {
  choix = parseInt(prompt(
    "Menu :\n" +
      "1. Filtrer le tableau pour afficher les personnages selon leur affiliation \n" +
      "2. Afficher un personnage pour voir son nom, espèce et affiliation\n" +
      "3. Afficher le nombre de personnage présent dans le tableau \n" +
      "4. Verifier la présence d'un personnage dans le tableau \n" +
      "5. Fin du programme \n" +
      "Saisissez une option "
  ));

  switch (choix) {
    case 1:
        filtreAffiliation(prompt("Saisissez une affiliation"));
        break;
    case 2:
        nomPersonnage(prompt("Saisissez un nom"));
        break;
    case 3:
        nomTotal();
        break;
    case 4:
        personnagePrésent(prompt("Verifier si un personnage est dans ce tableau"));
        break;
    case 5:
        console.log("Au revoir");
        break;
    default:
        console.log("L'option "+choix+" n'existe pas");
        break;
  }
} while (choix !== 5);