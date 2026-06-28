// Declaro variables
const frutas = ['manzana', 'banana', 'frutilla', 'naranja'];
const listaContenedor = document.querySelector('#frutas');


// Declaro la función para crear cada <li>
function agregarFruta(fruta) {
  listaContenedor.innerHTML += '<li>' + fruta + '</li>';
}
// Recorro el array con forEach y llamo a la función para cada elemento
frutas.forEach(agregarFruta);


// Resolución con estructura for tradicional , es equivalente
for (let i = 0; i < frutas.length ; i++) {
	listaContenedor.innerHTML += '<li>' + frutas[i] + '</li>';
}


// Búsqueda con interrupción, no se puede resolver con forEach
// Muestra en la consola

// Defino el elemento que quiero buscar
let frutaBuscada = 'banana';

for (let i = 0; i < frutas.length ; i++) {
	console.log('Revisando posición: ' + i);
	if(frutas[i]==frutaBuscada){
		console.log('Fruta encontrada en la posición ' + i);
		break;
	}
}
