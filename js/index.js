

 let lista = [2,3,4,1]
let listaPar = []
let listaImpar = []
let auxiliar = 0

  
for(let i=0; i<lista.length; i++){
	let posecion = lista[i];
	
	auxiliar += posecion;

	
	
console.log(` posecion ${posecion}  suma: ${auxiliar}  `)
}
for(const ordenar of lista){
	if(auxiliar % 2===0){
		listaPar.push(auxiliar)
	}else{
      listaImpar.push(auxiliar)
	}
}

// console.log(listaPar)
console.log(`lista impar: 
${listaImpar} lista par: ${listaPar}`)












// function compararN1N2(lista, n1, n2){
// 	let ordenar = lista[n1];
// 	lista[n1] = lista[n2];
// 	lista[n2] = ordenar;
// 	return lista;
// }


// function intercambios(lista){
// 	let seleccion = lista.length;
// 	for(let i=1; i<seleccion; i++){
// 		for(let j = 0; j< (seleccion - i); j++){
// 			let derecha = j + 1;
// 			if(lista[j] > lista[derecha]){
// 				compararN1N2(lista, j, derecha);

// 			}
// 		}

// 	}
	
//  return lista
// }
// let lista = [12,34,67,35,90,14,18,24,30,10]
// console.log(intercambios ( lista) )ss
