
//filter - metodo usado para filtrar um array com base em um critério

let alunos = [
    {nome:"Thalio", idade: 24},
    {nome:"Maria", idade: 14},
    {nome:"João", idade: 25},
    {nome:"Ana", idade: 10}

    
]

 

function maiorDe18(aluno){
    return aluno.idade > 18
}


let alunosDeMaior = alunos.filter(maiorDe18) 
console.log(alunosDeMaior)

let numeros = [0,1,2,3,4]

let numerosPares = numeros.filter(function(numero){
    return numero <3
        
    }  
)

console.log(numerosPares)
