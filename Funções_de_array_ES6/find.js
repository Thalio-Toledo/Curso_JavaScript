// find - encontrar um item especifico em um arrray


const alunos = [ "Thalio", "Ana", "Gabrieli","Maria"]

const aluno = alunos.find(function (aluno){
    return aluno == "Thalio"
})

console.log(aluno)