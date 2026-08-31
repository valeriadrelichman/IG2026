
// Capturo elementos del DOM
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');

// Defino función para agregar clase
const agregarClase = () => btn1.classList.add('rojo');

// Defino función para quitar clase
const quitarClase = () => btn2.classList.remove('rojo');

// Defino función para intercambiar clase
const intercambiarClase = () => btn3.classList.toggle('rojo');

// Defino eventos
btn1.addEventListener('click', agregarClase);
btn2.addEventListener('click', quitarClase);
btn3.addEventListener('click', intercambiarClase);