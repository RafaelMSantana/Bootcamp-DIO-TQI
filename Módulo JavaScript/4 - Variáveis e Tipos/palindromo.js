// solução 1:

/* function verPalindromo(string) {
    if (!string) console.log("string inexistente");
    if (string.split("").reverse().join("") === string) {
        console.log("É um palíndromo")} else {
            console.log("Não é palíndromo")
        }
} 

verPalindromo('ovo') */

// solução 2:

function verPalindromo(string) {
    if (!string) console.log("string inexistente");
    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 -i]) {
        return false
        }}
        return true
} 

console.log(verPalindromo("rodador"));

/* tentativas:

let frase = 'caramba'
let frase2 = frase.split("")
let frase3 = frase2.reverse().slice()
console.log(`${frase2} ${frase3}`)
if (frase2 == frase3) {
    console.log('É um palíndromo')
} else {
    console.log('Não é um palíndromo')
}
function verPalindromo (string) {
    if (!string) {console.log("string inexistente");}
    else {
    let frase2 = string.split("")
    let frase3 = frase2.reverse().slice()
    console.log(`${frase2} ${frase3}`)
    if (frase2 === frase3) {
        console.log('É um palíndromo')
    } else {
        console.log('Não é um palíndromo')
}
}
}

verPalindromo('onod')  */