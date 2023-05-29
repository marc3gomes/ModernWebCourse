const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function LerArquivo(caminho) {
    return new Promise( resolve => {
        fs.readFile(caminho, function(_, conteudo) {
            resolve(conteudo.toString())
        })
    })
}

LerArquivo(caminho)
.then(conteudo => console.log(conteudo))