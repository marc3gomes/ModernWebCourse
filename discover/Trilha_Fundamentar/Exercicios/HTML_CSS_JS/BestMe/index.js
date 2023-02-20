console.log(`
    Olá! 
    
    Seja bem-vindo ao aplicativo que irá
    te ajudar a encontrar a sua melhor
    versão!
    
    Responda as perguntas abaixo:`)

const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?",
    "E o que eu poderia fazer para melhorar?",
]

const ask = ( index = 0 ) => {
    process.stdout.write("\n\n" + questions[index] + " > ")
}

ask()

const answers = []
process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    if (answers.length < questions.length) {
        ask(answers.length)
    } else {
        process.exit()
    }    
})

process.on('exit', () => {
    console.log(`
        Bacana Marcelo!

        Essas foram as perguntas e repostas de hoje:

        O que aprendi hoje:
        ${answers[0]}
        
        O que me deixou aborrecido:
        ${answers[1]}
        
        O que me deixou feliz hoje:
        ${answers[2]}
        
        Você ajudou ${answers[3]} pessoas hoje:

        E o que eu poderia fazer para melhorar:
        ${answers[4]}

        Volte amanha para novas reflexões ;)
        
    `)
})