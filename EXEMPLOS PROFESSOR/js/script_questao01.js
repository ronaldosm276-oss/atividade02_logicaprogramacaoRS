//PEGANDO ELEMENTOS DO DOM

//Document Object Model - DOM, ALGO QUE SERVE PARA MANIPULAR ELEMENTOS DO HTML
//  https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model - OFFICIAL SITE FROM MOZILLA DEVS EXPLAINING THE CONCEPT



const divQ01 = document.querySelector('#div-q01')
//USA QUERY SELECTOR PARA PEGAR DADOS DE #DIV-q01 E ASSIGN THEM TO THE CONST DIVQ01
for (i = 1; i <= 1000; i++) {
    if (i % 7 === 0) {
        divQ01.innerHTML += `${i} <br>`
        //divtrabalhada. <div id="div-q01"> DENTRO DO HTML, DENTRO DESSA DIV, DEVERÃO SER COLOCADOS OS RESULTADOS DE += <br> (adicionando como string o valor atual de i e quebrando linha </div>
        //The logic here is very simple, it will count i up until 1000, with i++, for every new i, it will check if it being divided by 7 will result in no "remainings", which means the number will be divisible by 7. Then it will store every new i in the div.innerHTML, that += is very important, it means it won't overwrite past values, but keep adding them. And adding strings usually results in them being combined.
    }
}