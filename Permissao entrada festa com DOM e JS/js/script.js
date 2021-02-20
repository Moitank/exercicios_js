function VerificarEntrada() {
    NomeConvidado = document.getElementById("nome").value;
    ConvidadosMarcelo = ["Marcelo", "Livia", "Helena", "Caroline", "Flavio", "Marilia"]
    if (ConvidadosMarcelo.includes(NomeConvidado)) {
        document.getElementById("PermissaoDeEntrada").innerText = "Você pode entrar"
    } else {
            document.getElementById("PermissaoDeEntrada").innerText = "Você não pode entrar!"
        }
    }
