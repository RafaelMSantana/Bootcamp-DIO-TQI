function trocaPares(array) {
    if(!array) return -1
    if(!array.length) return -1

    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            console.log(`Você na casa ${[i]} já é zero`)
        } else if (array[i] % 2 == 0) {
            console.log(`Substituindo ${array[i]} por 0`)
            array[i] = 0
        }
    }
    return array
}

let lista = [3, 5, 7, 8, 9, 90, 0, 2]
console.log(trocaPares(lista))


