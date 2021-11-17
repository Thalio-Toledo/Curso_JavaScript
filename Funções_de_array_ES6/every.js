// every - função que verifica se todas os elementos de um array respeitam um determinada condição e retorna um valor booleano.


const alunos = [
    {nome:"Thalio", idade:24},
    {nome:"João", idade:18},
    {nome:"ana", idade:27},
    {nome:"maria", idade:22}
]

const alunosDeMaior = alunos.every(function (aluno){
    return aluno.idade >= 18
})

console.log(alunosDeMaior)