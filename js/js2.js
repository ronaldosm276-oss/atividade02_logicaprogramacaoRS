const formDados = document.querySelector('#formulario')
const Results = document.querySelector('#result')
const botão = document.querySelector('#btn-resultado')
const numeros = document.querySelector('#numDivisores')


botão.addEventListener('click', (evt) => {
    var listanum = ''
    evt.preventDefault()

    const form_num = new FormData(formDados)


    let number = parseFloat(form_num.get('numDivisores'))

    for (i = 1; i <= number; i++){
        let resultado = number % i

        console.log(resultado)
        

        if (resultado == 0){
            listanum += i + ', '
        }
       
    }
    Results.innerHTML = `${listanum.slice(0,-2)}.`
   

})








