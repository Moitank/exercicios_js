var tomate1 = 3.30
var tomate2 = 4.7
var arroz1 = 2.99
var arroz2 = 3.25
var cenoura1 = 3.99
var cenoura2 = 4.14

var resultadoInflacao = [tomate2 - tomate1, arroz2 - arroz1, cenoura2 - cenoura1]

function pulaLinha () {
    document.write ("<br><br>")
}

function inflacao () {
    var resultadoInflacao = [tomate2 - tomate1, arroz2 - arroz1, cenoura2 - cenoura1]
    return resultadoInflacao
    document.write ("Inflação do tomate, arroz e cenoura são respectivamente " + resultadoInflacao[0] + ', ' + resultadoInflacao[1] + ', ' + resultadoInflacao[2])
    pulaLinha();
}

function inflacaoMedia () {
    var resultadoInflacao = [tomate2 - tomate1, arroz2 - arroz1, cenoura2 - cenoura1]
    var resultadoMedia = (resultadoInflacao[0] + resultadoInflacao[1] + resultadoInflacao[2] / 3)
    document.write ("A inflação média é ", resultadoMedia)
    pulaLinha();
}

function estimativa () {
    var resultadoMedia = [((tomate2 - tomate1) / 6), ((arroz2 - arroz1) / 6), ((cenoura2 - cenoura1) / 6)]
    document.write ("A estimativa diária do tomate, arroz e cenoura é, respectivamente: " + resultadoMedia[0] + ', ' + resultadoMedia[1] + ', '+ resultadoMedia[2])
}


inflacao()
inflacaoMedia()
estimativa()