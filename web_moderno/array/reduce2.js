const alunos = [
    {nome: 'Marcelo', nota: 7.3, bolsista: true},
    {nome: 'Edu', nota: 9, bolsista: false},
    {nome: 'Liz', nota: 10, bolsista: false},
    {nome: 'Jane', nota: 6.3, bolsista:true}
]

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))