function calcularCores() {
    var faixa1 = document.getElementById("faixa1").value
    var faixa2 = document.getElementById("faixa2").value
    var faixa3 = document.getElementById("faixa3").value
    var faixa4 = document.getElementById("faixa4").value
    var saida = document.getElementById("saida")


    //concatnar as 2 faixa e converter para number
    var concatnar = faixa1 + faixa2
    concatnar = Number(concatnar)
    faixa3 = Number(faixa3)
    faixa4 = Number(faixa4)

    //calcular com a faixa 3
    var calculo = concatnar * faixa3

    //mostra no site
    saida.textContent = `O resultado é ${calculo} Ω com ${faixa4}% de tolenacia`


}