// Exercice 4.3: Compter le nombre de fois une lettre apparait dans une phrase

function letterCount(_phrase, _lettre) {
    let i_LettreCount = 0;
    for (let i = 0; i < _phrase.length; i++) {
        let i_CurrentIndex = _phrase.substring(i, i+1);

        if (_lettre.indexOf(i_CurrentIndex) !== -1) {
            i_LettreCount++;
        }
    }
    alert("Cette phrase contient "+i_LettreCount+" fois la lettre "+_lettre);
}

letterCount(prompt("Saisis une phrase"), prompt("Saisis une lettre"));