// reduce - Pegar todos os valores de um array e condesá-los em um só 

var numeros = [2,3,4,5,6]

var soma = 0 
soma = numeros.reduce(function(soma,numero){
    return soma + numero
},0)

console.log(soma)