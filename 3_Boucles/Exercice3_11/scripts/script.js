// Exercice 3.11: Nombre magique

let i_MagicNumber = parseInt(Math.random()*100); // Chiffre aléatoire à deviner
// console.log(i_MagicNumber); // Triche pour voir le i_MagicNumber dans la console

let i_InputNumber; // Déclaration global pour la saisis

while(i_InputNumber !== i_MagicNumber) { // While existe tant que le nombre saisis n'est pas le même que le nombre aléatoire
    i_InputNumber = parseInt(prompt("Devine le nombre!")); // Saisis du nombre

    if (i_InputNumber < i_MagicNumber) { // Indique que le nombre aléatoire est plus grand si le nombre saisis est plus petit
        alert("Plus grand");
    } else if (i_InputNumber > i_MagicNumber) { // Indique que le nombre aléatoire est plus petit si le nombre saisis est plus grand
        alert("Plus petit");
    }
}

alert("Bien joué!"); // Alerte fin de jeu une fois hors du loop