
// Progamas para somar 2 números 


const prompt = require("prompt-sync")()//adiciona o pacote para

//Entradas:
const num1 = Number(prompt("1º Número: "))
const num2 = Number(prompt("2º Número: "))

//soma:
const soma = num1 + num2

//saida
console.log(`A soma é: ${soma}`)