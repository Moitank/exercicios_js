


function pulaLinha () {

    document.write ("<br><br>");
}


function mostra (frase) {

    document.write (frase);
    pulaLinha();
}


for (var multiplicador = 1; multiplicador <= 10; multiplicador++) {

    mostra (7 * multiplicador);
}



mostra("FIM");

