// for ..of - Laço utilizado para percorrer um array caso ele seja iteravel

var numeros = [1,2,3,4,5]

for(var numero of numeros){
    console.log(numero)
}

// Break - interromper a execução de um laço

var numeros2 = [1,2,3,4,5]

for(var numero2 of numeros2){
    if(numero2 > 3){
        break;
    }
    console.log(numero2)
}

// continue - indicar que o laço deve ser continuado

var numeros3 = [1,2,3,4,5]

for(var numero3 of numeros3){
    if(numero3 == 2){
        continue
    }
    console.log(numero3)
}