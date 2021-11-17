//some - verifica se pelo menos um dos elementos atende uma condição e retorna um valor booleano

var pesoDasMalas = [
    12, 30, 21, 29
]

var temMalaAcimaDoPeso = pesoDasMalas.some(function (mala){
    return mala > 30
})

console.log(temMalaAcimaDoPeso)