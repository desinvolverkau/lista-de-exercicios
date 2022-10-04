// imprimir numeros primos entre 1 a 100:
//1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31 ......


//entradas 
var num = 1// priemro numero primo:

//saidas

for(num ; num<=100; num++ ){

// calculo para  saber se é numero primo:
if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0 || num % 7 === 0     )
console.log(num)
}