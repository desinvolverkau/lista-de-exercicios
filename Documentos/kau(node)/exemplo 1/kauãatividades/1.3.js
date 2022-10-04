
//constante para identificar  os botões:

const area = document.getElementById("area")// retorna uma referencia a operação multiplicar:
const perimetro = document.getElementById("perimetro")// retorna uma referencia a operação somar os numeros ao quadrado:
const saida = document.querySelector("h3") // retorna uma referencia ao elemento h3:
const saida1 = document.querySelector("div") // retorna uma referencia ao elemento que possui o id div:


//referências  aos campos de texto
const campoALTURA = document.getElementById("num1")
const campoBASE = document.getElementById("num2")


//operação realizada é PII veze o raio ao quadrado:
area.addEventListener("click", (e) => {

  //referecia do numero 1 digitado:
  const num1 = Number(campoALTURA.value)

  //Operacões basicas estre dois numeros digitdos
  const area = 3.14 * num1 * 2


  //operação realizada para saber o periemto é de 2* valor de PII  vezes o raio da circunferência:
  perimetro.addEventListener("click", (e) => {

    //referecia do numero 1 digitado:
    const num1 = Number(campoALTURA.value)

    //Operacões basicas estre dois numeros digitdos
    const perimetro = 2 * 3.14 * num1



    //saidas

    //saida para determinar a área da circunferência:

    saida1.innerText = `O comprimento do circulo é  ${perimetro}.` // inclui uma frase no componente h3:

    e.preventDefault()   // evita o envio do formulário:
  })

  if (area > 2) {

    console.log = saida1

    saida1.innerText = `A área do ciruclo  é  ${area}  essa circunferência possui uma àrea maior que 2 .`// inclui uma frase no componente h3:

    e.preventDefault()   // evita o envio do formulário:
  }


  else {

    console.log = saida1

    saida1.innerText = `A área do cirulo é  ${area} essa circunferência possui uma àrea menor que 2.` // inclui uma frase no componente h3:

    e.preventDefault()

  }

})

