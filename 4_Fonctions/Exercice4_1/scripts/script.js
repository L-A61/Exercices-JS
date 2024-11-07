// Exercice 4.1: produit & image

function produit(_x, _y) {
    var _cube = _x ** 3;
    var _produit = _x * _y;
    return document.write("<p>Le cube de " + _x + " est " +_cube + " </p>"),
    document.write("<p>Le produit de " + _x + " x " + _y + " est égal à " + _produit + " </p>")
}

function afficheImg(_img) {
    document.write('<img src="' + _img + '"')
}

produit(prompt("Saisir un premier nombre pour calculer son cube et son produit"), prompt("Saisir un deuxième nombre pour calculer le produit du premier chiffre"));
afficheImg("assets/papillon.jpg");