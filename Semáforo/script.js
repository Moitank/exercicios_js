

function sinalizar (luz) {

    if (luz == 'verde'){
        return 'Pode passar!'
    }

    if (luz == 'amarelo'){
        return 'Melhor freiar!'
    }

    if(luz == 'vermelho'){
        return 'Pare já"'
    }


}

document.write(sinalizar('verde') + "<br>");
document.write(sinalizar('amarelo') + "<br>");
document.write(sinalizar('vermelho') + "<br>");
