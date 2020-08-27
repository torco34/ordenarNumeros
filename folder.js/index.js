function prinerOrden( ordenarArreglo, numero1, numero2){
	if(numero1 === numero2){
		return ordenenarArreglo;
	}
	let  cambio =  ordenarArreglo[numero1];

	 ordenarArreglo[numero1] =  ordenarArreglo[numero2];
	 ordenarArreglo[numero2] =  cambio;
	 
	return  ordenarrreglo;

}





 function  seleccionar(ordenDeArreglo){
 	let longitud = ordenDeArreglo.length;
 	for(let i =0; i<longitud -1; i++){

 		let numeroPequeno = i;
 		
 		for(let j = i + 1; j < longitud; j++ ){
 			if(ordenDeArreglo[j] < ordenDeArreglo[numeroPequeno]){
 				numeroPequeno = j;
 			}
 		}
 		prinerOrden(ordenDeArreglo, numeroPequeno, i);
 	}
 	return ordenDeArreglo;
 }

let ordenDeArreglo = [6,8,2,4,0,1,5,7];

console.log(seleccionar(ordenDeArreglo));










function intercabio(numerosAOrdenar, primerNu, segundoNu){
	let ordenar = numerosAOrdenar[primerNu];
	numerosAOrdenar[primerNu] = numerosAOrdenar[segundoNu];
	numerosAOrdenar[segundoNu] = ordenar;
	return numerosAOrdenar;
}


function organizarNumeros(numerosAOrdenar){
	let seleccion = numerosAOrdenar.length;
	for(let i=1; i<seleccion; i++){
		for(let j = 0; j< (seleccion - i); j++){
			let derecha = j - 1;
			if(numerosAOrdenar[j] > numerosAOrdenar[derecha]){
				intercabio(numerosAOrdenar, j, derecha);

			}
		}

	}
	
 return numerosAOrdenar
}
let numerosAOrdenar = [12,34,67,35,90,14,18,24,30,10]
console.log(organizarNumeros ( numerosAOrdenar) )
