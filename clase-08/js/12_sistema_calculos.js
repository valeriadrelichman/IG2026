// Armar un sistema para realizar cálculos entre dos números. El usuario completa los números en dos campos de un formulario. Hay un tercer campo para mostrar resultados. Hay 4 botones para calcular: suma, resta, multiplicación y división.

// Capturo los elementos 
let botonSumar = document.querySelector('#sumar');
let botonRestar = document.querySelector('#restar');
let botonMultiplicar = document.querySelector('#multiplicar');
let botonDividir = document.querySelector('#dividir');
let resultado = document.querySelector('#resultado');

// Defino los eventos para cada uno de los botones

botonSumar.addEventListener('click', function() {
	
	let dato1 = document.querySelector('#num1').value;
	let dato2 = document.querySelector('#num2').value;
	let suma = Number(dato1) + Number(dato2);
	resultado.value = suma;
	
});

botonRestar.addEventListener('click', function() {
	
	let dato1 = document.querySelector('#num1').value;
	let dato2 = document.querySelector('#num2').value;
	let resta = Number(dato1) - Number(dato2);
	resultado.value = resta;
	
});

botonMultiplicar.addEventListener('click', function() {
	
	let dato1 = document.querySelector('#num1').value;
	let dato2 = document.querySelector('#num2').value;
	let multiplicacion = Number(dato1) * Number(dato2);
	resultado.value = multiplicacion;
	
});

botonDividir.addEventListener('click', function() {
	
	let dato1 = document.querySelector('#num1').value;
	let dato2 = document.querySelector('#num2').value;
	let division = Number(dato1) / Number(dato2);
	resultado.value = division;
	
});