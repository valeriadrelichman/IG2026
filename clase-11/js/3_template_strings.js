// Template strings
let saludo = `Hola, soy un template string`;
console.log(saludo); 

// Múltiples líneas
let mensaje = `Hola,
este es un mensaje en múltiples
líneas`;
console.log(mensaje);

// Interpolación de variables
let nombre = 'Mirtha';
console.log(`Hola, soy ${nombre}`); 

// Ejecutar expresiones
console.log(`Hola, soy ${nombre}, tengo ${2026 - 1927} años`);

// Ejecutar funciones
let peliculas = ['Los martes orquídeas','La Patota','Con gusto a rabia'];
console.log(`Hola, soy ${nombre}, actué en las películas ${peliculas.join(', ')}`);