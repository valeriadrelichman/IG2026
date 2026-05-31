// Declaro las variables que voy a usar en el programa
let num;
let mensaje;
let mostrarResultado = document.querySelector('.resultado');
let mostrarResultado2 = document.querySelector('.otroResultado');

// Pido al usuario que ingrese un número
num = prompt('Ingrese un número','');

// Resolución con if else if else
if(num%2 == 0 && num%3 == 0) {
	mensaje = num + ' es múltiplo de 2 y múltiplo de 3';
	mostrarResultado.innerText = mensaje;
} else if(num%2 == 0) {
	mensaje = num + ' es múltiplo de 2';
	mostrarResultado.innerText = mensaje;
} else if(num%3 == 0) {
	mensaje = num + ' es múltiplo de 3';
	mostrarResultado.innerText = mensaje;
} else {
	mensaje = num + ' no es múltiplo de 2 ni es múltiplo de 3';
	mostrarResultado.innerText = mensaje;
}

// Resolución con if anidados
if(num%2 == 0 && num%3 == 0) {
	mensaje = num + ' es múltiplo de 2 y múltiplo de 3';
	mostrarResultado2.innerText = mensaje;
} else {
	if(num%2 == 0) {
		mensaje = num + ' es múltiplo de 2';
		mostrarResultado2.innerText = mensaje;
	} else {
		if(num%3 == 0) {
			mensaje = num + ' es múltiplo de 3';
			mostrarResultado2.innerText = mensaje;
		} else {
			mensaje = num + ' no es múltiplo de 2 ni es múltiplo de 3';
			mostrarResultado2.innerText = mensaje;
		}
	}
}

