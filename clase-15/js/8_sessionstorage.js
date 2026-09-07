
// Agregar una propiedad y valor
sessionStorage.setItem('nombre','Pepe');
console.log(sessionStorage);

// Obtener el valor de una propiedad
let dato = sessionStorage.getItem('nombre');
console.log(dato);

// Borrar una propiedad
// sessionStorage.removeItem('nombre');

// Borrar todo
// sessionStorage.clear();