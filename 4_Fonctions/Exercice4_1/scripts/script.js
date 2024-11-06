// Exercice 4.1: produit & image

function produit(_x, _y) {
    var _cube = _x ** 3;
    var _produit = _x * _y;
    return alert("Le cube de " + _x + " est égal à " + _cube), 
    alert("Le produit de " + _x + " x " + _y + " est égal à " + _produit);
}

produit(prompt("Saisir un premier nombre pour calculer son cube et son produit"), prompt("Saisir un deuxième nombre pour calculer le produit du premier chiffre"));