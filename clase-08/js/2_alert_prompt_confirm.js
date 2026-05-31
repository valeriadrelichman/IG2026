// Mensaje de bienvenida con método alert()
let mensaje = 'Te damos la bienvenida al sitio de ejemplo';
alert(mensaje);

// Pedimos el nombre al usuario con método prompt()
let nombre = prompt('¿Cuál es tu nombre?','completá aquí');

// Cambiamos el título principal para dar una bienvenida personalizada
let tituloPrincipal = document.querySelector('.principal');
tituloPrincipal.innerText = 'Hola ' + nombre;

// Preguntamos si quiere cambiar el color con método confirm(), si acepta se cambia
let respuesta = confirm('¿Querés cambiar el color del mensaje?');

if(respuesta){
	tituloPrincipal.style.backgroundColor = 'yellow';
	tituloPrincipal.style.color = 'red';
}