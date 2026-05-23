// Al hacer click sobre el elemento h1 se le cambia el fondo a rojo
let titulo = document.querySelector('h2');

titulo.addEventListener('click', function() {
    titulo.style.backgroundColor = 'red';
});



// Al presionar una tecla muestra en consola la recla presionada
// La consola muestra los datos del evento (e) y por lo tanto podemos saber qué tecla presionó el usuario, accediendo a la propiedad key: e.key

window.addEventListener('keydown', function(e) {
	console.log(e);
    console.log(e.key);
});




// Al hacer doble click sobre el elemento h3 se le cambia el color a verde
let segundoTitulo = document.querySelector('h3');

segundoTitulo.addEventListener('dblclick', function() {
    this.style.color = 'green';
});



// Al hacer click sobre el link en lugar de funcionar, muestra una alerta
let link = document.querySelector('a');

link.addEventListener('click', function(e) {
    e.preventDefault()
    alert('El link no funciona!');
});


