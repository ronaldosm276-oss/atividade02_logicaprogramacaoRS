//PEGAR ELEMENTOS DO DOM
const inputNome = document.querySelector('#nome')
const inputIdade = document.querySelector('#idade')
const btnVerifica = document.querySelector('#btn-verifica')
const divResultado = document.querySelector('#div-resultado')
const masc = document.querySelector('#masc')
const fem = document.querySelector('#fem')



let cont20 = 0
let contMenor = 0
let contAdulto = 0
let contFem = 0
let contMasc = 0


btnVerifica.addEventListener('click', (evt) => {
    let idade = Number(inpuIdade.value)
    let nome = Number(inputNome.value)

    if (idade >= 18 && idade <= 65){
        contAdulto++
    } 
    else{
        (idade < 18)
        contMenor++
    }
    if  (){
       
    }
    if {
        //insertcodethatchecknextthinghere ++
    }
    if {
        //insertcodethatchecknextthinghere ++
    }
    if {
        //insertcodethatchecknextthinghere ++
    }

    cont20++

    if (cont20 == 1) {
        inpuIdade.setAttribute('disabled', 'disabled')
        inputNome.setAttribute('disabled', 'disabled')
        masc.setAttribute('disabled', 'disabled')
        fem.setAttribute('disabled', 'disabled')

        divResultado.innerHTML = `TOTAL DE PESSOA QUE PODEM DOAR ${contPode} <br> TOTAL DE PESSOA QUE NÃO PODEM DOAR ${contNaoPode} `
    }

    inpuIdade.value = ''
    inputPeso.value = ''
})