// CONSIGNA
// Hacer un programa para que el usuario adivine un número del 1 al 5. Si adivina se muestra en la página un mensaje indicando el número adivinado. Si no adivina, tiene una nueva oportunidad para adivinar.

// Declaro las variables que voy a usar en el programa
let numAdivinar = 4; // El número que hay que adivinar
let numUsuario;
let adivino = false; // Variable que me sirve para saber si el usuario adivinó o todavía no

// Uso una estructura do while porque como mínimo se ejecuta una vez porque tengo que pedirle un dato al usuario y uso la variable adivino para la condición

do {

	// Pido un número al usuario y verifico que sea un número del 1 al 5
	// Para verificar uso 3 condiciones. La primera condición verifica si es NaN, o sea, no es un número. La segunda condición verifica si el número es menor a 1. La tercera condición verifica si el número es mayor a 5. En cualquiera de los 3 casos se trata de un dato incorrecto 
	numUsuario = Number(prompt('Ingrese un número del 1 al 5',''));
	while(isNaN(numUsuario) || numUsuario<1 || numUsuario>5) {
		numUsuario = Number(prompt('El dato ingresado es incorrecto. Por favor, ingrese un número del 1 al 5',''));
	}

	// Verifico si adivinó, o sea, si el número ingresado por el usuario es el número definido al inicio del programa
	if (numUsuario == numAdivinar) {
		adivino = true;
	} else {
		alert('No adivinó. Puede intentar de nuevo.');
	}

} while (!adivino)

// Muestro el resultado
let mostrarResultado = document.querySelector('.resultado');
mostrarResultado.innerText = 'El número adivinado es: ' + numAdivinar;
