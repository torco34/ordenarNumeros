let lista = [13, 23, 2, 3, 5, 7, 9]
let listaPar = []
let listaImpar = []
let sumarPosecion = 0
for (let i = 0; i < lista.length; i++) {
    let valorPosecion = lista[i];
    sumarPosecion += valorPosecion;
    console.log(` Valor de la posecion: ${valorPosecion},   suma del valor: ${sumarPosecion}`)
    if (sumarPosecion % 2 === 0) {
        listaPar.push(sumarPosecion)
    } else {
        listaImpar.push(sumarPosecion)
    }
}
console.log(`Numeros Pares: ${listaPar}`)
console.log(`Numeros Impares: ${listaImpar}`)






function intercambiar(arreglo, n1, n2) {
    let cambiar = arreglo[n1]
    arreglo[n1] = arreglo[n2];
    arreglo[n2] = cambiar;
    return arreglo
}

function comparar() {
    let posecionDelNumero = arreglo.length;
    for (let i = 1; i < posecionDelNumero; i++) {
        for (let j = 0; j < (posecionDelNumero - i); j++) {
            let resta = j - 1;
            if (arreglo[j] > arreglo[resta]) {
                intercambiar(arreglo, j, resta)
            }
        }
    }
    return arreglo
}






let arreglo = [2, 4, 6, 9, 1]
console.log(comparar(arreglo))

function compararN1N2(listas, n1, n2) {
    let ordenar = listas[n1];
    lista[n1] = listas[n2];
    lista[n2] = ordenar;
    return lista;
}

function intercambios(lista) {
    let seleccion = listas.length;
    for (let i = 1; i < seleccion; i++) {
        for (let j = 0; j < (seleccion - i); j++) {
            let derecha = j + 1;
            if (listas[j] > listas[derecha]) {
                compararN1N2(listas, j, derecha);
            }
        }
    }
    return listas
}
let listas = [12, 34, 67, 35, 90, 14, 18, 24, 30, 10]
console.log(intercambios(listas))