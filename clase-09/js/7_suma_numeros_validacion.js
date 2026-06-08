// CONSIGNA
// Hacer un programa que pida al usuario 5 números y los sume. Para cada dato ingresado por el usuario se debe verificar que sea un número antes de sumarlo. Si no es un número se le pide que lo ingrese de nuevo. Mostrar un mensaje en la página indicando el resultado.

// Declaro las variables que voy a usar en el programa
let num; // Variable de trabajo para guardar cada uno de los números que va a ingresar el usuario
let suma = 0; // Variable acumulador para ir sumando los cada número que ingresa el usuario


// Uso una estructura for para repetir 5 veces el bloque de código

for (let i = 0; i < 5; i++) {
	
	// Pido al usuario que ingrese un número
	num = prompt('Ingrese un número. Este es el dato ' + (i+1),'');
	// Me aseguro de convertir el dato ingresado a tipo número
	num = Number(num);

	// Para verificar si el dato es un número utilizo una estructura while
	// La condición utiliza la función predefinida isNaN y si el dato es NaN  muestra un mensaje de error y pide que se ingrese nuevamente
	while(isNaN(num)) {
		num = prompt('El dato ingresado no es un número. Por favor, ingrese un número','');
		num = Number(num);
	}

	// Una vez validado que el dato es un número, lo sumo. Cada dato nuevo se va sumando a lo que ya estaba sumado, por eso se usa +=
	suma += num;
}

// Muestro la suma en el elemento resultado
// El resultado se muestra fuera de la estructura for porque no se tiene que repetir
let mostrarResultado = document.querySelector('.resultado');
mostrarResultado.innerText = 'La suma de los números ingresados es: ' + suma;

