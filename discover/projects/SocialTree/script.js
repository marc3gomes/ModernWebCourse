 function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    const img = document.querySelector("#profile img")

    if(html.classList.contains('light')) {
        img.setAttribute('src', './assets/avatar-light.png')
        img.setAttribute('alt', 'Foto de Marcelo Gomes, fazendo um leve sorriso, sem mostrar os dentes, usando um fone de ouvido, um cordão do evento insight em um cenario com luz amarela baixa.')
    } else {
        img.setAttribute('src', './assets/avatar.png')
        img.setAttribute('alt', 'Foto de Marcelo Gomes, sorrindo, usando um fone de ouvido, um cordão do evento insight em um cenario com luz amarela baixa.')
    }
 }