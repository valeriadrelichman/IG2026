// Hacer un programa que escriba un mensaje de bienvenida personalizado. 
// En esta versión el nombre se completa directamente en el archivo JS, luego veremos cómo pedirle datos al usuario.

// Capturo el elemento del DOM que quiero modificar
let bienvenida = document.querySelector('.bienvenida');

// Defino la variable nombreUSuario y le asigno un valor
let nombreUsuario = 'Pepe';

// Defino la variable mensaje y le asigno un texto concatenado con el valor de la variable nombreUsuario
let mensaje = 'Hola ' + nombreUsuario;

// Al hacer click sobre el título, muestro el mensaje como contenido del elemento capturado
bienvenida.addEventListener('click', function() {
    this.innerText = mensaje;
});