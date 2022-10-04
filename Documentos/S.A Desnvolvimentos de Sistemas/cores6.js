function calcularCores() {
    var faixa1 = document.getElementById("faixa1").value
    var faixa2 = document.getElementById("faixa2").value
    var faixa3 = document.getElementById("faixa3").value
    var faixa4 = document.getElementById("faixa4").value
    var faixa5 = document.getElementById("faixa5").value
    var faixa6 = document.getElementById("faixa6").value
    var saida = document.getElementById("saida")


    //concatnar as 2 faixa e converter para number
    var concatnar = faixa1 + faixa2 + faixa3 + faixa4
    concatnar = Number(concatnar)
    faixa5 = Number(faixa5)
    faixa6 = Number(faixa6)

    //calcular com a faixa 3
    var calculo = concatnar * faixa5

    //mostra no site
    saida.textContent = `O resultado é ${calculo} Ω com ${faixa6}% de tolerancia`


}