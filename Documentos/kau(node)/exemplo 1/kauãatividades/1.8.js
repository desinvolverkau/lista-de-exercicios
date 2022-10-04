
const media = document.getElementById("media")// retorna uma referencia a operação somar:
const saida = document.querySelector("h3") // retorna uma referencia ao elemento h3:
const saida1 = document.querySelector("div") // retorna uma referencia ao elemento que possui o id div:
 
 
//referências  aos campos de texto
const campo1ªNOTA  = document.getElementById("num1")
const campo2ªNOTA = document.getElementById("num2")
const campo3ªNOTA  = document.getElementById("num3")
 
 
 
 
    //operação realizada somar:
    media.addEventListener("click", (e) =>{
 
    //referecia do numero 1 digitado:
    const num1 = Number(campo1ªNOTA.value)
   
   
    //referecia do numero 2 digitado:
    const num2 = Number(campo2ªNOTA.value)
 
     //referecia do numero 3 digitado:
     const num3 = Number(campo3ªNOTA.value)
   
   
    //Operacões basicas estre três numeros digitdos:
    const resultado= num1 + num2 + num3 
 
    //saidas:
 
    if(resultado/3>=7){
 
       console.log=saida1
 
      saida1.innerText = `A média do aluno é ${resultado/3}  Esta Aprovado.` // inclui uma frase no componente h3:
       
    
    }
 
    else{
        console.log=saida1
 
        saida1.innerText = `A média do aluno é ${resultado/3} Esta Reprovado.` // inclui uma frase no componente h3:
         
      e.preventDefault()   // evita o envio do formulário:
      }
    })
   

