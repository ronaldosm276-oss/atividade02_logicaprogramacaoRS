const Results = document.querySelector('#result')

let numeros = ''

cont = 0


for (i = 1; i <= 1000; i++){
    if (i % 7 == 0)
    cont++
}


Results.innerHTML = `números divisiveis = ${cont}`