// CONSIGNA
// Hacer un programa que pida al usuario 5 números, los guarde y luego calcule el promedio de todos ellos. Para cada dato ingresado por el usuario, antes de guardarlo, se debe verificar que sea un número. Si no es un número, se le pide que lo ingrese de nuevo. Mostrar un mensaje en la página indicando el resultado.

// Para calcular el promedio necesito conocer la cantidad de números y la suma de estos. En este ejercicio la cantidad está definida en la consigna (5).

// Declaro las variables 
const cantidad = 5; // La cantidad está definida en la consigna
let numeros = []; // Array vacío para guardar los datos que ingresa el usuario
let num; // Variable para trabajar con cada dato que ingresa el usuario
let suma = 0; // Variable acumulador para sumar
let promedio; // Variable de trabajo en la que voy a guardar el valor del promedio

// Pido los datos al usuario, verifico que sean números y los guardo en el array
for (let i = 0; i < cantidad; i++) {
	num = Number(prompt('Ingrese un número',''));
	while (isNaN(num)) {
		num = Number(prompt('El dato ingresado es incorrecto. Por favor, ingrese un número',''));
	}
	numeros.push(num);
}

// Verifico por consola los datos ingresados en el array
console.log(numeros);

// Para calcular el promedio tengo que sumar todos los números y luego dividirlos por la cantidad

// Sumo todos los números del array
for (let i = 0; i < numeros.length; i++) {
	suma += numeros[i];
}

// Calculo el promedio
promedio = suma / cantidad;

// Muestro la suma en el elemento resultado
let mostrarResultado = document.querySelector('.resultado');
mostrarResultado.innerText = 'El promedio es: ' + promedio;

