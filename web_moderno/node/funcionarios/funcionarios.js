
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China'
const generoF = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)

    const func = funcionarios
    .filter(chineses)
    .filter(generoF)
    .reduce(menorSalario)
    
    console.log(func)
})

/* 
    Encontrar a mulher chinesa que tem o menor salário na lista acima.
*/