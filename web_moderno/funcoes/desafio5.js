function formatarMoeda(valorMoeda) {
    const valorEmReais = `R$ ${valorMoeda.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmReais)
}

formatarMoeda(0.1 + 0.2)