// CONSIGNA
// Hacer un programa que calcule la suma de los números impares positivos menores que 100. Debe mostrar un mensaje en la página indicando el resultado.

// Aparte de la variable contador de la estructura for, vamos a necesitar una variable acumulador. Una variable acumulador va acumulando valores, en este caso va sumando valores. 

// Declaro la variable suma que será mi variable acumulador y le asigno el valor 0, porque 0 es el valor neutro de la suma
let suma = 0;

// Utilizo la estructura for para recorrer todos los número, desde el 1 hasta el 99, o sea, los números positivos menores que 100
for (let i = 1; i < 100; i++) {
	// Pregunto si el número es impar. Si es impar, lo sumo. Sino, no hago nada.
	if (i%2 == 1){
		suma += i;
	}
}

// Muestro la suma en el elemento con la clase resultado
let mostrarResultado = document.querySelector('.resultado');
mostrarResultado.innerText = 'La suma es: ' + suma;
