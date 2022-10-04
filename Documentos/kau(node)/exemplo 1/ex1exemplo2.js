// Progamas para dar nomes e valores:


const prompt = require("prompt-sync")()//adiciona o pacote para

//Entradas:

const veiculo = prompt("veiculo: ")
const preco = Number(prompt ("Preco em R$: "))

//Indenficador
const entrada = preco /2
const parcelas = (preco /2) /12

//Saida
console.log(`A entrada  é apatir de: ${entrada}`)
console.log(`As parcelas  é de 12x de: ${parcelas}`)