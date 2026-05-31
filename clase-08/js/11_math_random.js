// Generamos un número al azar y lo mostramos por consola
let numero = Math.random();
console.log(numero);

// El mismo número redondeado al entero más cercano (arriba o abajo según corresponda), puede ser 0 o puede ser 1
console.log(Math.round(numero));
// El mismo número redondeado al entero más cercano hacia abajo, siempre va a ser 0
console.log(Math.floor(numero));
// El mismo número redondeado al entero más cercano hacia arriba, siempre va a ser 1
console.log(Math.ceil(numero));	


// El mismo número multiplicado por 10 y redondeado hacia abajo, nos da un número entre 0 y 9
let num = numero*10;
console.log(num);	
console.log(Math.floor(num));	


// Otro número al azar, multiplicado por 10, más 1 y luego rendondeado, nos da un número entre 1 y 10
// Lo mostramos en la página
let azar = Math.floor((Math.random() * 10) + 1);
let mostrarResultado = document.querySelector('.resultado');
mostrarResultado.innerText = azar;