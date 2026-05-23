// CAMBIAR PROPIEDAD style

// Capturo el primer elemento con la clase principal
let tituloPrincipal = document.querySelector('.principal');

// Con la propiedad style cambio los estilos del elemento capturado en la variable tituloPrincipal
tituloPrincipal.style.fontSize = '3em';
tituloPrincipal.style.textTransform = 'uppercase';
tituloPrincipal.style.color = 'orange';
tituloPrincipal.style.fontFamily = 'serif';

// CAMBIAR CONTENIDO CON innerText

// Capturo el primer elemento <h2>
let tituloSecundario = document.querySelector('h3');

// Con la propiedad innerText cambio el contenido del elemento capturado en la variable tituloSecundario
tituloSecundario.innerText = 'Cambié el texto del título';
tituloSecundario.innerText += ' y agregué más texto al título ya cambiado';

// CAMBIAR HTML CON innerHTML

// Capturo el elemento <header>
let pie = document.querySelector('footer');

// Con la propiedad innerHTML cambio la estructura HTML que contiene el elemento capturado en la variable encabezado y le puedo agregar contenido con código HTML
pie.innerHTML = '<p>Ahora el pie de página es <strong>distinto</strong></p>';
pie.innerHTML += '<p>Y agregamos una etiqueta que no estaba</p>';