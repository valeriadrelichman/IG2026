// Función que recibe dos string como parámetros y retorna un mensaje de saludo

// Declaración de la función

function saludar(nombre,apellido){
	let mensaje = 'Hola ' + nombre + ' ' + apellido;
	return mensaje;
}


// Invocación a la función

let retorno = saludar('Mirtha','Legrand');
console.log(retorno);


// Otra invocación con datos distintos

retorno = saludar('Legrand','Mirtha');
console.log(retorno);


// Invocación sin datos para los parámetros

retorno = saludar();
console.log(retorno);


// Invocación utilizando datos pedidos al usuario

let nombreUsuario = prompt('Ingrese su nombre','');
let apellidoUsuario = prompt('Ingrese su apellido','');

retorno = saludar(nombreUsuario,apellidoUsuario);

let mostrarResultado = document.querySelector('.resultado');
mostrarResultado.innerText = retorno;

