// En la página hay 5 cuadrados de colores. Armar un sistema de 5 botones. Un botón para cada recuadro que cambie la visibilidad (si están visibles los oculta, si están ocultos los muestra). Se tiene que resolver con un única función. Agregar un botón que cambie la visibilidad de todos.

let boton1 = document.querySelector('#cambiar1');
let boton2 = document.querySelector('#cambiar2');
let boton3 = document.querySelector('#cambiar3');
let boton4 = document.querySelector('#cambiar4');
let boton5 = document.querySelector('#cambiar5');
let botonTodo = document.querySelector('#cambiartodo');


boton1.addEventListener('click', function() {
	visibilidad('#cuadro1');
});
boton2.addEventListener('click', function() {
	visibilidad('#cuadro2');
});
boton3.addEventListener('click', function() {
	visibilidad('#cuadro3');
});
boton4.addEventListener('click', function() {
	visibilidad('#cuadro4');
});
boton5.addEventListener('click', function() {
	visibilidad('#cuadro5');
});


function visibilidad(elemento) {
	let estado = document.querySelector(elemento).style.visibility;
	if (estado != 'hidden') {
		document.querySelector(elemento).style.visibility = 'hidden';
	} else {
		document.querySelector(elemento).style.visibility = 'visible';
	}
}


botonTodo.addEventListener('click', function() {
	visibilidad('#cuadro1');
	visibilidad('#cuadro2');
	visibilidad('#cuadro3');
	visibilidad('#cuadro4');
	visibilidad('#cuadro5');
});