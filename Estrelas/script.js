

function pulaLinha () {

    document.write("<br><br>");
}


function mostra (frase) {

    document.write(frase);
    pulaLinha();
}

for (var i=1; i<=3; i++) {

    for (var coluna =1; coluna <= 10; coluna++){
        document.write("*");
    }

    pulaLinha();
}
