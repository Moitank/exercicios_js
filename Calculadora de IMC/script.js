

    function pulaLinha () {

        document.write ("<br>");
        document.write ("<br>");
    }

    function mostra (frase) {

        document.write (frase);
        pulaLinha();
    }

    function calculaImc (altura, peso) {

        return peso / (altura * altura);
    }


    var nome = prompt ("Informe seu nome")
    var alturaInformada = prompt (nome + ", Informe sua altura");
    var pesoInformado = prompt (nome + ", Informe seu peso");

    var imc = calculaImc (alturaInformada, pesoInformado);

    document.write (nome + ", o seu IMC é " + Math.round (imc));

 

     
