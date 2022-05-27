// tipos de função

// função declarativa

/* function funcao () {
    console.log('Testando')
}
funcao()
 */

// expressão de função
// sem nomeação

/* var funcao = function () {
    console.log('essa é uma expressão de função')
}
funcao() */

// arrow function

/* var funcao = () => {
    console.log('essa é uma arrow function')
}

funcao(); */
function escopoLocal() {
	let escopoLocalInterno = 'local';
}
console.log(escopoLocalInterno);
