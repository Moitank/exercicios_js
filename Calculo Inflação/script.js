

function calculaInflacao (valorInicial, valorFinal, dataInicial, dataFinal, produto) {

    var valor = valorFinal - valorInicial;
    var data = dataFinal - dataInicial;
    var inflacao = valor / data ;

    document.write("A inflação total é " + valor + "<br><br><br><br>")
    document.write ("A inflação diaria do " + produto + " é " + inflacao)

}

calculaInflacao(3.30, 4.70, 24, 30, "tomate");