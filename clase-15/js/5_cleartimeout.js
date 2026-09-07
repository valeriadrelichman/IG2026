
console.log('Hola');

// Timer, para ejecutarse a los 3 segundos
const id = setTimeout(() => console.log('Chau'), 3000);

// Detengo el timer inmediatamente (descomentar para probar)
// clearTimeout(id);

// Detengo el timer con un evento
const btn = document.querySelector('.btn');
btn.addEventListener('click', () => clearTimeout(id));