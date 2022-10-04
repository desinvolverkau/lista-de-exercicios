
//constante para identificar  os botões:

const area = document.getElementById("area")// retorna uma referencia a operação multiplicar:
const hipotenusa = document.getElementById("hiportenusa")// retorna uma referencia a operação somar os numeros ao quadrado:
const saida = document.querySelector("h3") // retorna uma referencia ao elemento h3:
const saida1 = document.querySelector("div") // retorna uma referencia ao elemento que possui o id div:


//referências  aos campos de texto
const campoALTURA = document.getElementById("num1")
const campoBASE = document.getElementById("num2")


//operação realizada mutiplicação
area.addEventListener("click", (e) => {

    //referecia do numero 1 digitado:
    const num1 = Number(campoALTURA.value)


    //referecia do numero 2 digitado:
    const num2 = Number(campoBASE.value)

    //Operacões basicas estre dois numeros digitdos
    const area = num1 * num2

    saida1.innerText = `É um triangulo de área  ${area}.` // inclui uma frase no componente h3:

})

//operação realizada a soma de dois numeros ao quadrdado:
hipotenusa.addEventListener("click", (e) => {

    //referecia do numero 1 digitado:
    const num1 = Number(campoALTURA.value)


    //referecia do numero 2 digitado:
    const num2 = Number(campoBASE.value)

    //Operacões basicas estre dois numeros digitdos
    const hipotenusa = num1 * 2 + num2 * 2

    saida1.innerText = `A hipotenusa é  ${hipotenusa * 2}.` // inclui uma frase no componente h3:

})
e.preventDefault()   // evita o envio do formulário: