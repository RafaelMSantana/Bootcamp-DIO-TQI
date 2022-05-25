/* sem object destructuring:

function alunosA(listaAlunos, media) {
    let aprovados = [];
    for (let i = 0; i < listaAlunos.length; i ++) {
        if (listaAlunos[i].nota >= media) {
            aprovados.push(listaAlunos[i].nome)
        }
    }
    console.log(aprovados)
} */

// com object destructuring:

function alunosA(listaAlunos, media) {
    let aprovados = [];
    for (let i = 0; i < listaAlunos.length; i ++) {
        const { nota, nome } = listaAlunos[i]

        if (nota >= media) {
            aprovados.push(nome)
        }
    }
    console.log(aprovados)
}

const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
];

alunosA(alunos, 7)
