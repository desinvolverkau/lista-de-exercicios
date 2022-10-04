function calcularCores() {
    var faixa1 = document.getElementById("faixa1").value
    var faixa2 = document.getElementById("faixa2").value

    var saida = document.getElementById("saida")


    //concatnar as 2 faixa e converter para number
    var resultado1 = faixa1 - faixa2

    //calcular com a faixa 3
    var calculo = resultado1 / 0.020

    if (calculo < 0) {

        saida.textContent = `O fonte não é suficiente Ω`


    }
    else {
        //mostra no site
        saida.textContent = `O resultado é ${calculo} Ω`

    }
}