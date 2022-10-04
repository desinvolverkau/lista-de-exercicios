//constante para identificar  os botões:
const dividiresoma = document.getElementById("dividiresoma")
const dividir1 = document.getElementById("dividir1")
const mutiplicar1 = document.getElementById("mutiplicar1")
const mutiplicar2 = document.getElementById("mutiplicar2")
const saida = document.querySelector("h3") // retorna uma referencia ao elemento h3
const saida1 = document.querySelector(".div1") // retorna uma referencia ao elemento que possui a class div1
const saida2 = document.querySelector("#div2") // retorna uma referencia ao elemento que possui o id div2
const saida3 = document.querySelector(".div3") // retorna uma referencia ao elemento que possui a class div1
const saida4 = document.querySelector("#div4") // retorna uma referencia ao elemento que possui o id div2

//referências  aos campos de texto
const campoTensão = document.getElementById("num1")
const campoResistor1 = document.getElementById("num2")
const campoResistor2 = document.getElementById("num3")

//operação realizada adição
dividiresoma.addEventListener("click", (e) => {

    const num1 = Number(campoTensão.value)

    //referecia do numero 1 digitado:
    const num2 = Number(campoResistor1.value)


    //referecia do numero 2 digitado:
    const num3 = Number(campoResistor2.value)

    //Operacões basicas estre dois numeros digitdos
    const div = 1 / num2
    const div1 = 1 / div
    const resultado1 = num3 + div1

    saida1.innerText = `A Resistência Equivalente é ${resultado1}Ω .` // inclui uma frase no componente h3:

    e.preventDefault()   // evita o envio do formulário:

}
)

//operação realizada subtração
dividir1.addEventListener("click", (e) => {


    //referecia do numero 1 digitado:
    const num1 = Number(campoTensão.value)

    //referecia do numero 2 digitado:
    const num2 = Number(campoResistor1.value)

    //referecia do numero 3 digitado:
    const num3 = Number(campoResistor2.value)

    //Operacões basicas estre dois numeros digitdos
    const div = 1 / num2
    const div1 = 1 / div
    const resultado1 = num3 + div1
    const resultado2 = num1 / resultado1


    saida2.innerText = `A corrente total  é ${resultado2}A.` // inclui uma frase no componente h3:

    e.preventDefault()   // evita o envio do formulário:

}
)

//operação realizada mutiplicação
mutiplicar1.addEventListener("click", (e) => {


    //referecia do numero 1 digitado:
    const num1 = Number(campoTensão.value)


    //referecia do numero 1 digitado:
    const num2 = Number(campoResistor1.value)


    //referecia do numero 2 digitado:
    const num3 = Number(campoResistor2.value)

    //Operacões basicas estre dois numeros digitdos
    const div = 1 / num2
    const div1 = 1 / div
    const resultado1 = num3 + div1
    const resultado2 = num1 / resultado1
    const Tensao = num2 / resultado2


    saida3.innerText = `A tensão total do Resistor1 ${Tensao}V.` // inclui uma frase no componente h3:

    e.preventDefault()   // evita o envio do formulário:

}
)

//operação realizada mutiplicação
mutiplicar2.addEventListener("click", (e) => {


    //referecia do numero 1 digitado:
    const num1 = Number(campoTensão.value)


    //referecia do numero 1 digitado:
    const num2 = Number(campoResistor1.value)


    //referecia do numero 2 digitado:
    const num3 = Number(campoResistor2.value)

    //Operacões basicas estre dois numeros digitdos
    const div = 1 / num2
    const div1 = 1 / div
    const resultado1 = num3 + div1
    const resultado2 = num1 / resultado1
    const Tensao = num3 / resultado2

    saida4.innerText = `A Tensão total do Resistor2 ${Tensao}V.` // inclui uma frase no componente h3:

    e.preventDefault()   // evita o envio do formulário:

}
)






