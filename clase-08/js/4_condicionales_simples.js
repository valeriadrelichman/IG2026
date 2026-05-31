// Declaro las variables que voy a usar en el programa
let num;
let mensaje1;
let mensaje2;
let mostrarResultado = document.querySelector('.resultado');

// Pido al usuario que ingrese un número
num = prompt('Ingrese un número','');

// Pregunto si el número es múltiplo de 2
if(num%2 == 0) {
	mensaje1 = 'El número ' + num + ' es múltiplo de 2 <br>';
	mostrarResultado.innerHTML += mensaje1;
} 

// Pregunto si el número es múltiplo de 3
if(num%3 == 0) {
	mensaje2 = 'El número ' + num + ' es múltiplo de 3 <br>';
	mostrarResultado.innerHTML += mensaje2;
}

// El programa usa dos estructuras condicionales porque escribe los mensajes por separado. 
// ¿Qué pasa si un número no es múltiplo de 2 y tampoco es múltiplo de 3?
