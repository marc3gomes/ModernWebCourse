/* 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */

function jurosSimples(capitalInicial, taxaJuros, tempo) {
    return capitalInicial + (capitalInicial * taxaJuros * tempo)
}

function jurosComposto(capitalInicial, taxaJuros, tempo) {
    let calc =  capitalInicial * (1 + taxaJuros) ** tempo
    return `R$ ${calc.toFixed(2).toString().replace(".", ",")}`
}

console.log(jurosSimples(10000, 0.01, 6))
console.log(jurosComposto(10000, 0.01, 6))