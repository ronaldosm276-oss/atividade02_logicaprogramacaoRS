//PEGAR ELEMENTOS DO DOM
const inputRenda = document.querySelector('#renda')
const inputIdade = document.querySelector('#idade')
const btnVerifica = document.querySelector('#btn-verifica')
const divResultado = document.querySelector('#div-resultado')
const masc = document.querySelector('#masc')
const fem = document.querySelector('#fem')



let cont20 = 0
let contFem = 0
let contMasc = 0
let somaMasc = 0
let rendaMulher = 0
let rendaMaior = 0
let pessoas = ''
let sexo = ''



btnVerifica.addEventListener('click', (evt) => {
    let idade = Number(inputIdade.value)
    let renda = Number(inputRenda.value)
    //pega idade se for número, ou convert em número?
    //evt faz o que?

    if (masc.checked) {
        contMasc++
        sexo = 'masculino'
    }
    else {
        contFem++
        sexo = 'feminino'
    }
    if (sexo == 'feminino' && renda >= 1000 && renda <= 3000){
        rendaMulher++
    }
    if (sexo == 'masculino'){
        somaMasc += renda
    }
    if(renda >= 2000){
        rendaMaior++
    }

    cont20++
    pessoas += ` Idade ${idade}, ${sexo} <br>`

    //como eu puxo o sexo da pessoa??

    if (cont20 == 2) {
        let mediaMasc = (somaMasc / contMasc)
        let pessoasAcima = (rendaMaior / (cont20))
        if(somaMasc == 0){
            mediaMasc = 'Nenhum homem respondeu a pesquisa'
        }
        
        //não vou colocar 20 dados, preguiça
        inputIdade.setAttribute('disabled', 'disabled')
        inputRenda.setAttribute('disabled', 'disabled')
        masc.setAttribute('disabled', 'disabled')
        fem.setAttribute('disabled', 'disabled')
        //essa parte desabilita de colocar mais dados, greys out the options when it finishes

        divResultado.innerHTML = `${cont20} pessoas respoderam a esse questionário <br> <br> <br>
        ${pessoas} 
        Sexo: Masculino = ${contMasc}, Feminino = ${contFem} <br>
        Média Masculina = ${mediaMasc} <br>
        Qntd Mulheres com renda de 1000 a 3000: ${rendaMulher}
        <br>
        Percentual pessoas com salário acima de R$2000,00 : ${pessoasAcima * 100}%
        `
    }

    inputIdade.value = ''
    inputRenda.value = ''

    // oque isso aqui tá fazendo?
})