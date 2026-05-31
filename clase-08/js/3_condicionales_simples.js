// Declaro las variables que voy a usar en el programa
let edad;
let mensaje;

// Pido al usuario que ingrese la edad
edad = prompt('Ingrese la edad de la persona','');

// Pregunto si la edad ingresada es mayor o igual a 18
if(edad>=18) {
	mensaje = 'La persona es mayor de edad';
} else {
	mensaje = 'La persona es menor de edad';
}

// Muestro el mensaje en el elemento resultado
let mostrarResultado = document.querySelector('.resultado');
mostrarResultado.innerText = mensaje;

// Probar: ¿qué pasa si en lugar de un número el usuario ingresa letras? 
// ¿Por qué pasa eso?
