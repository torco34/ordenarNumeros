
function intercabio(numerosAOrdenar, primerNu, segundoNu){
	let ordenar = numerosAOrdenar[primerNu];
	numerosAOrdenar[primerNu] = numerosAOrdenar[segundoNu];
	numerosAOrdenar[segundoNu] = ordenar;
	return numerosAOrdenar;
}


function organizarNumeros(numerosOrdenar){
	let seleccion = numerosAOrdenar.length;
	for(let i=1; i<seleccion; i++){
		for(let j = 0; j< (seleccion - i); j++){
			let derecha = j + 1;
			if(numerosAOrdenar[j] > numerosAOrdenar[derecha]){
				intercabio(numerosAOrdenar, j, derecha);

			}
		}

	}
	
 return numerosAOrdenar
}
let numerosAOrdenar= [12,34,67,35,90,14,18,24,30,10]
console.log(organizarNumeros ( numerosAOrdenar) )