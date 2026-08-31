
// Capturo el elemento HTML que servirá de referencia para contener a los nuevos elementos creados
const contenedorNuevos = document.querySelector('section');

// Creo un elemento <p> vacío y lo guardo en la variable nuevoElemento
const nuevoElemento = document.createElement('p');

// Agrego contenido al emento creado
nuevoElemento.innerText = 'Hola, soy nuevo';

// Reemplaza todos los hijos del elemento contenedor
contenedorNuevos.replaceChildren(nuevoElemento);

// Reemplaza el elemento contenedor por el nuevo elemento
// contenedorNuevos.replaceWith(nuevoElemento);


// Capturo elemento para eliminar
const footer = document.querySelector('footer');

// Elimino el elemento
footer.remove();