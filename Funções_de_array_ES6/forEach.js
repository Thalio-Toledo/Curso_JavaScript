

let carros = ["fox", "corolla", "gol", "fit"];
let numeros = [ 1,2,3,4,5];

//forEach

//forEach com função anonima
carros.forEach(function(carro){
    console.log(carro)
})


//forEach com funcão nomeada
numeros.forEach(multiplicarPor3) //função passada como parametro

function multiplicarPor3(numero){
    n1 =  numero * 3
    console.log(n1)
}

