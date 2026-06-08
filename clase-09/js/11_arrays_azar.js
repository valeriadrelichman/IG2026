// CONSIGNA
// Hacer un programa que le pregunte al usuario cuántos números quiere generar y luego genere esa cantidad de números al azar entre 1 y 100. La cantidad ingresada por el usuario tiene que ser un número igual o mayor a 1, si es un dato incorrecto se le pide que lo ingrese de nuevo. Encontrar el número mayor de todos los generados y mostrar el resultado en la página.

// Declaro e inicializo las variables 
let cantidad; // La cantidad es un dato que ingresa el usuario
let numeros = []; // Array para guardar los datos generados al azar
let num; // Cada número generado al azar
let mayor; // Variable para guardar el máximo - NO SE INICIALIZA
let menor; // Contador para guardar el mínimo - NO SE INICIALIZA

// Pido la cantidad al usuario y verifico que sea un dato válido
cantidad = Number(prompt('Ingrese la cantidad de números a generar',''));
while (isNaN(cantidad)||cantidad<1) {
	cantidad = Number(prompt('El dato ingresado es incorrecto. Ingrese la cantidad de números a generar',''));
}

// Genero los números al azar y los guardo en el array
for (let i = 0; i < cantidad; i++) {
	num = Math.floor(Math.random() * 100) + 1;
	numeros.push(num);
}

// Verifico por consola los datos del array
console.log(numeros);


// Para encontrar el número mayor y el número menor tengo que comparar cada número con otro. Entonces podemos decir que al iniciar a comparar, el primer número será el mayor (porque todavía no lo comparé) y el primer número será el menor. 
mayor = numeros[0];
menor = numeros[0];

// Recorro el array y comparo cada número. Si el dato que estoy comparando es mayor, actualizo el valor de la variable. Lo mismo para menor. 
for (let i = 0; i < numeros.length; i++) {
	if (numeros[i] > mayor) {
		mayor = numeros[i];
	}
	if (numeros[i] < menor) {
		menor = numeros[i];
	}
}

// Muestro los resultados
let mostrarResultado = document.querySelector('.resultado');
mostrarResultado.innerText = 'El número mayor es ' + mayor + ' y el número menor es ' + menor;

