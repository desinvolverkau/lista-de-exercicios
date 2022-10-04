
//constante para identificar  os botões:

const meses = document.getElementById("meses")// retorna uma referencia a operação 1 a mais:
const dias = document.getElementById("dias")// retorna uma referencia a operação 1 a menos:
const saida = document.querySelector(".div")
const saida1 = document.querySelector("#div") // retorna uma referencia ao elemento que possui o id div:



//referências  aos campos de texto
const campoIDADE = document.getElementById("num1")

//Ação realizada do botão:
meses.addEventListener("click", (e) => {

    //referecia do numero 1 digitado:
    const num1 = Number(campoIDADE.value)

    //Operacões realizada pra descobrir idade  em meses:
    const meses = num1 * 12


    if (num1 >= 18) {

        console.log = saida1

        saida1.innerText = `O numero é ${meses}  A  pessoa é maior de idade.` // inclui uma frase no componente h3:


    }

    else {

        console.log = saida

        saida.innerText = `O numero é  ${meses} A pessoa é menor de idade.` // inclui uma frase no componente h3:

    }

})

//Ação realizada do botão:
dias.addEventListener("click", (e) => {

    //referecia do numero 1 digitado:
    const num1 = Number(campoIDADE.value)

    //Operacões realizada pra descobrir idade  em dias:
    const dia = num1 * 365



    if (num1 >= 18) {

        console.log = saida1

        saida1.innerText = `O numero é ${dia} A pessoa é maior de idade.` // inclui uma frase no componente h3:




    }

    else {

        console.log = saida

        saida.innerText = `O numero é  ${dia} A pessoa é menor  de idade .` // inclui uma frase no componente h3:


    }

})
e.preventDefault()

