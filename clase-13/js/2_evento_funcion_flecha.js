
// Capturo el elemento del DOM
const btn1 = document.querySelector('.btn1');

// Defino evento, versión función declarada anónima
btn1.addEventListener('click', function(){
    alert('Hola');
});

// Defino evento, versión función flecha
btn1.addEventListener('click', () => alert('Hola 2'));
