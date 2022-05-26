/* Atividade: validação de erros por tipo
O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.

Crie uma função que recebe um array e um número
Realize as seguintes validações
Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
Se o array não for do tipo 'object', lance um erro do tipo TypeError
Se o número não for do tipo 'number', lance um erro do tipo TypeError
Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
Utilize a declaração try...catch
Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof */

function erros (array, tamMAx) {
    try {if (!array || !tamMAx) 
        throw new ReferenceError('Falta um array e/ou tamanho')
    if (typeof array !== 'object') 
        throw new TypeError("Lista incorreta")
    if (typeof tamMAx !== 'number') 
        throw new TypeError('tamMax precisa ser tipo number')
    if (array.length !== tamMAx)
    throw new RangeError('Tamanho inválido')
    return array
}
    catch(e) {
        if (e instanceof ReferenceError) {
            console.log('Erro é Reference Error')
            console.log(e.name)
            console.log(e.stack)
        } else if (e instanceof TypeError) {
            console.log('Erro é TypeError')
            console.log(e.name)
            console.log(e.stack)
        } else if (e instanceof RangeError) {
            console.log('Erro é RangeError')
            console.log(e.name)
            console.log(e.stack)
        } else {
            console.log('Erro não esperado: ' + e)
        }
    }   
}

console.log(erros([1, 2, 2, 2, 2], 5))
