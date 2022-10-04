
//constante para identificar  os botões:

const sucessor = document.getElementById("sucessor")// retorna uma referencia a operação 1 a mais:
const antecessor = document.getElementById("antecessor")// retorna uma referencia a operação 1 a menos:
const saida = document.querySelector(".div") 
const saida1 = document.querySelector("#div") // retorna uma referencia ao elemento que possui o id div:



//referências  ao campo de texto:
const campoNumero = document.getElementById("num1")

//ação realizada pelo botão:
sucessor.addEventListener("click", (e) => {

    //referecia do numero 1 digitado:
    const num1 = Number(campoNumero.value)

    //Operacões basicas estre dois numeros digitdos:
    const sucessorN = num1 + 1


    if (num1 >= 0) {

        console.log = saida1

        saida1.innerText = `O numero é ${sucessorN}  O numero digitado é positivo.` // inclui uma frase no componente h3:
        

    }

    else {

        console.log = saida

        saida.innerText = `O numero é  ${sucessorN} O numero digitado é negativo.` // inclui uma frase no componente h3:

    }

})

//ação realizada pelo botão:
antecessor.addEventListener("click", (e) => {

    //referecia do numero 1 digitado:
    const num1 = Number(campoNumero.value)

    //Operacões basicas estre dois numeros digitdos
    const antecessor = num1 - 1

    //saidas:

    if (num1 >= 0) {

        console.log = saida1

        saida1.innerText = `O numero é ${antecessor} O numero digitado é positivo.` // inclui uma frase no componente h3:

    }

    else {

        console.log = saida

        saida.innerText = `O numero é  ${antecessor} O numero digitado é negativo.` // inclui uma frase no componente h3:
   
    }

})
e.preventDefault()

