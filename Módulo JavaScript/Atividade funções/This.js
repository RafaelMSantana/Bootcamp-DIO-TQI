// Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this. Crie seus próprios objetos para esta atividade!

// Call:

let obj1 = {nome:'Ronaldo', idade: 31}
let animal = {nome:'Belinha', idade: 4}
let pessoa2 = {nome: 'Carla', idade: 50}

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

console.log(calculaIdade.call(animal, 9))

// Apply:

console.log(calculaIdade.apply(obj1, [11]))
