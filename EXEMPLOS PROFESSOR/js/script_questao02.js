//PEGAR OS ELEMENTOS DO DOM
const inputNum = document.querySelector('#num')
const btnNum = document.querySelector('#btn-num')
const divDivisores = document.querySelector('#div-divisores')

btnNum.addEventListener('click', (evt) => {
    let numDigitado = Number(inputNum.value)

    for(i = 0; i <= numDigitado; i++){
        if(numDigitado % i == 0){
            divDivisores.innerHTML += `${i} <br>`
        }
    }

//This is question 2. Very simple as well, but introduces new elements, it's worth taking a look at html, and tags and stuff. it adds an event listerner, it being just so that it will execute the code after 
})



