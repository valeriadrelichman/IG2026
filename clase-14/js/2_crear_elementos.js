
// Capturo el elemento HTML que servirá de referencia para contener a los nuevos elementos creados
const contenedorNuevos = document.querySelector('section');

// Creo un elemento <p> vacío y lo guardo en la variable nuevoElemento
const nuevoElemento = document.createElement('p');

// Agrego contenido al emento creado
nuevoElemento.innerText = 'Hola, soy nuevo';

// Insertar el elemento antes del elemento contenedor (section en este ejemplo)
contenedorNuevos.before(nuevoElemento);

// Insertar el elemento después del elemento contenedor
// contenedorNuevos.after(nuevoElemento);

// Insertar el elemento antes del primer hijo del elemento contenedor
// contenedorNuevos.prepend(nuevoElemento);

// Insertar el elemento después del último hijo del elemento contenedor
// contenedorNuevos.append(nuevoElemento);