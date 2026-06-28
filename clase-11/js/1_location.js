// Capturar botones y elemento para mostrar 

let btnOtra = document.querySelector('#otra');
let btnMostrar = document.querySelector('#mostrar');
let btnRecargar = document.querySelector('#recargar');
let pResultado = document.querySelector('.resultado');

// Defino eventos

btnOtra.addEventListener('click', function(e) {
    e.preventDefault();
	// Cambio la URL y voy a otra página
    location.href = 'https://multimedia.una.edu.ar';
});

btnMostrar.addEventListener('click', function(e) {
    e.preventDefault();
	// Capturo la URL actual y la muestro
	let actual = location.href;
    pResultado.innerText += actual;
});

btnRecargar.addEventListener('click', function(e) {
    e.preventDefault();
	// Recargo la página
    location.reload();
});