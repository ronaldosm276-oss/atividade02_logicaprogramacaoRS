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
let contIdoso = 0
let pessoas = ''
let sexo = ''


btnVerifica.addEventListener('click', (evt) => {
    let idade = Number(inputIdade.value)
    //pega idade se for número, ou convert em número?
    let nome = inputNome.value

    //evt faz o que?

    if (idade >= 18 && idade < 65) {
        contAdulto++
    }
    else if (idade < 18) {
        contMenor++
    }
    else if (idade >= 65) {
        contIdoso++
    }
    if (masc.checked) {
        contMasc++
        sexo = 'masculino'
    }
    else {
        contFem++
        sexo = 'feminino'
    }

    cont20++
    pessoas += `${nome}: ${idade}, ${sexo} <br>`

    //como eu puxo o sexo da pessoa??

    if (cont20 == 2) {
        //não vou colocar 20 dados, preguiça
        inputIdade.setAttribute('disabled', 'disabled')
        inputNome.setAttribute('disabled', 'disabled')
        masc.setAttribute('disabled', 'disabled')
        fem.setAttribute('disabled', 'disabled')
        //essa parte desabilita de colocar mais dados, greys out the options when it finishes

        divResultado.innerHTML = `${pessoas} <br> <br> <br> Menores = ${contMenor}
        Adultos = ${contAdulto}, Idosos = ${contIdoso} 
        Sexo: Masculino = ${contMasc}, Feminino = ${contFem}`
    }

    inputIdade.value = ''
    inputNome.value = ''
})