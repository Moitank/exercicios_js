


function pulaLInha() {

    document.write("<br><br>");

}

function mostra (frase) {
    document.write(frase);
    pulaLInha();
}


var totalFamiliares = parseInt(prompt("Quantidade de familiares?"));

var numero = 1;

var totalIdades = 0;

while(numero <= totalFamiliares) {

    var idade = parseInt(prompt("informe idade do familiar"));
    totalIdades = totalIdades + idade;
    numero++;
}

var mediaDasIdades = totalIdades/totalFamiliares;

mostra("A média das idades é " + mediaDasIdades);

mostra("FIM");
