// Declaro la variable mensaje dentro de la función, por lo tanto tendrá scope local

function saludar(){
	let mensaje = 'Hola mundo';
	return mensaje; 
}


// Intento usar la variable mensaje fuera de la función

console.log(mensaje);


