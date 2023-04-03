let pessoa = document.getElementById('pessoa')
let gravar = document.getElementById('gravar')

console.log(pessoa)
console.log(gravar)

pessoa.addEventListener('click', ()=>{
    let conteudo = document.getElementById('conteudo')

    conteudo.style.display = 'block'
})

gravar.addEventListener('click', ()=>{
    let nome = document.getElementById('nome').value
    let idade = Number(document.getElementById('idade').value)
    let peso = Number(document.getElementById('peso').value)
    console.log('nome')
    console.log('idade')
    console.log('peso')

    localStorage.setItem('nome',nome)
    localStorage.setItem('idade',idade)
    localStorage.setItem('peso',peso)

    sessionStorage.setItem('nome',nome)
    sessionStorage.setItem('idade',idade)
    sessionStorage.setItem('peso',peso)
})

