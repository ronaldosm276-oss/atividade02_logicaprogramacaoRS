const formDados = document.querySelector('#formulario')
const peso = document.querySelector('#peso')
const idade = document.querySelector('#idade')
const botão = document.querySelector('#enviar-dados')
const limpar = document.querySelector('#limpar')
const resultado = document.querySelector('#result')

let naoDoa = 0
let Doa = 0
let pessoas = 0

botão.addEventListener('click', (evt) => {
    evt.preventDefault()

    let age = Number(idade.value)
    //pega idade se for número, ou convert em número?
    let kg = Number(peso.value)

    if (age >= 18 && age <= 60 && kg >= 50){
        Doa++
        
     }
    else{
        naoDoa++
        
    }

    pessoas++

    if (pessoas == 2) {
        //não vou colocar 20 dados, preguiça
        idade.setAttribute('disabled', 'disabled')
        peso.setAttribute('disabled', 'disabled')
        botão.setAttribute('disabled', 'disabled')
        limpar.setAttribute('disabled', 'disabled')
     
        //essa parte desabilita de colocar mais dados, greys out the options when it finishes

        resultado.innerHTML = `<br> total número de pessoas:${pessoas} <br> <br> <br> 
        PODEM DOAR SANGUE: ${Doa}
        <br>
        NÃO PODEM DOAR SANGUE: ${naoDoa}`

}})
