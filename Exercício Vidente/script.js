

var nome = ("Marcelo Moita")
var filhos = ("2")
var cidade = ("Lisboa")
var profissao = ("Programador")
var item1 = ("Filtro de agua")
var item2 = ("linha de pesca")
var item3 = ("anzol")
var animal1 = ("Tigre")

//A vidente

function pulaLinha () {
    document.write ("<br><br><br>");
    
}

function vidente () {
    document.write ("A vidente prevê: " + nome + " terá " + filhos + " filhos e viverá em " + cidade + " trabalhando como " + profissao + ".")
    pulaLinha();
}

vidente();



// Ilha Deserta

function ilha () {
    document.write ("Eu levaria para uma ilha deserta:" + item1 + ", " + item2 + " e " + item3 + "." );
    pulaLinha();
}

ilha();



// Animal

function animal () {
    document.write ("Num primeiro momento, eu gostaria de ser um " + animal1 + ".");
    document.write ("<br>");

    animal1 = ("Lobo");

    document.write ("Pensando melhor, prefiro ser um " + animal1 + ".");
}

animal();











mostra( "Num primeiro momento, eu gostaria de ser um:" + animalEscolhido +"." + "<br>")

var animalEscolhido = (" Lobo")


mostra( "Pensando melhor, prefiro ser um" + animalEscolhido +".")
