var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

/* Mudar a cor do texto em CURRENT_NUMBER para vermelho quando o número for negativo:
function increment() {
    currentNumber += 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber < 0) {
        currentNumberWrapper.style.color = 'red'
    } else {currentNumberWrapper.style.color = 'black'}
}

function decrement() {
    currentNumber -= 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber < 0) {
        currentNumberWrapper.style.color = 'red'
    } else {currentNumberWrapper.style.color = 'black'}
} */

//Crie condicionais que desabilitam o botão de incrementar ou decrementar quando count chegar a um determinado valor (ex.: 0 <= count =< 10):

function increment() {
    
    if (currentNumber < 10) {
    currentNumber += 1;
    currentNumberWrapper.innerHTML = currentNumber;}
}

function decrement() {
    
    if (currentNumber > 0) {
        currentNumber -= 1;
    currentNumberWrapper.innerHTML = currentNumber;}
}