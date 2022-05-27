function comparaNum () {
    let n1 = Number(prompt('Valor 1:'));
    let n2 = Number(prompt('Valor 2:'));
    let soma = n1 + n2;
    let iguais;
    let menor10;
    let menor20;
    if (!n1 || !n2) {
        alert('Valores inválidos');
        comparaNum()
    } else 
    {
    if (n1 == n2) {
        iguais = ''
    } else {
        iguais = 'não'
    }
    if (n1 + n2 < 10) {
        menor10 = 'menor'
    } else if (n1 + n2 == 10) {
        menor10 = 'igual'
    } else {
        menor10 = 'maior'
    }
    if (n1 + n2 < 20) {
        menor20 = 'menor'
    } else if (n1 + n2 == 20) {
        menor20 = 'igual'
    } else {
        menor20 = 'maior'
    }

    alert(`Os números ${n1} e ${n2} ${iguais} são iguais. Sua soma é ${soma}, que é ${menor10} que 10 e ${menor20} que 20.`)
    comparaNum ()}
}

comparaNum()