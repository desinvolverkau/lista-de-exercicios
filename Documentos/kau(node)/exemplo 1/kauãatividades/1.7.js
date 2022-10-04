
//constante para identificar  os botões:

const celsius = document.getElementById("celsius")// retorna uma referencia a operação multiplicar:
const saida = document.querySelector("h3") // retorna uma referencia ao elemento h3:
const saida1 = document.querySelector("div") // retorna uma referencia ao elemento que possui o id div:


//referências  aos campos de texto
const campoFAHRENHEIT = document.getElementById("num1")

//Ação realizada do botão:
celsius.addEventListener("click", (e) => {

  //referecia do numero 1 digitado:
  const num1 = Number(campoFAHRENHEIT.value)

  //operação realizada  para saber sa temperatura em celcius C° :

  if (resultado >= 0) {

    console.log = saida1

    saida1.innerText = `A temperatura em C° é   ${resultado} e é positiva .`// inclui uma frase no componente h3:

  }


  else {

    console.log = saida1

    saida1.innerText = `A temperatura em C° é ${resultado} e é negativa.` // inclui uma frase no componente h3:

  }

})
e.preventDefault()