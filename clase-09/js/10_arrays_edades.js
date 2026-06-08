// CONSIGNA
// Hacer un programa que pida al usuario la edad de 10 personas y guarde los datos ingresados. Para cada dato ingresado por el usuario se debe verificar que sea una edad (un número entre 0 y 120) antes de guardarlo. Si es un dato incorrecto se le pide que lo ingrese de nuevo. Contar cuántas son las persona menores de edad y cuántas las mayores de edad. Mostrar los resultados en la página.

// Declaro e inicializo las variables 
const cantidad = 10; // La cantidad está definida en la consigna
let edades = []; // Array para guardar los datos que ingresa el usuario
let edad; // Variable para trabajar con cada dato que ingresa el usuario
let cantidadMenores = 0; // Contador inicializado en 0
let cantidadMayores = 0; // Contador inicializado en 0

// Pido los datos al usuario, verifico que sean edades y los guardo en el array
for (let i = 0; i < cantidad; i++) {
	edad = Number(prompt('Ingrese la edad de la persona nro ' + (i+1),''));
	while (isNaN(edad) || edad<0 || edad>120) {
		edad = Number(prompt('El dato ingresado es incorrecto. Por favor, ingrese la edad de la persona nro ' + (i+1),''));
	}
	edades.push(edad);
}

// Verifico por consola los datos ingresados en el array
console.log(edades);

// Para contar las cantidad de edades mayores y menores tengo que recorrer el array
for (let i = 0; i < edades.length; i++) {
	if (edades[i] < 18) {
		cantidadMenores++;
	} else {
		cantidadMayores++;
	}
}

// Muestro la suma en el elemento resultado
let mostrarResultado = document.querySelector('.resultado');
mostrarResultado.innerText = 'La cantidad de personas menores es ' + cantidadMenores + ' y la cantidad de personas mayores es ' + cantidadMayores;

