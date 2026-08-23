// Capturo el elemento del DOM
const btn1 = document.querySelector('.btn1');

// Defino funciones para las distintas acciones
const saludo = () => alert('Hola');
const color = () => btn1.style.color = 'red';

// Defino eventos
btn1.addEventListener('click', saludo);
btn1.addEventListener('click', color);