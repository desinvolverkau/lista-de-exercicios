
//constante para identificar  os botões:

const area = document.getElementById("area")// retorna uma referencia a operação multiplicar:
//const saida = document.querySelector("h3") // retorna uma referencia ao elemento h3:
const saida1 = document.querySelector("#saida") // retorna uma referencia ao elemento que possui a class div1




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

    // saidas ,operação para saber se é ou não um quadadro:

    if (num1 === num2) {

        console.log(`É um quadrado de área  ${area}.`)



        saida1.innerText = `É um quadrado de área  ${area}.` // inclui uma frase no componente h3:

    }

    else {

        console.log(`É um retangulo de área  ${area}.`)



        saida1.innerText = `É um retangulo de área  ${area}.` // inclui uma frase no componente h3:


    }

    //e.preventDefault()   // evita o envio do formulário:
})
