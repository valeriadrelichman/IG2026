// Array de objetos con los datos de las películas

let peliculas = [
	{
		titulo: 'Toy Story 5',
		minutos: 102,
		estreno: 2026,
		poster: 'img/toy-story-5.jpg'
	},
	{
		titulo: 'Supergirl',
		minutos: 108,
		estreno: 2026,
		poster: 'img/supergirl.jpg'
	},
	{
		titulo: 'Minions & Monstruos',
		minutos: 85,
		estreno: 2026,
		poster: 'img/minions-y-monstruos.jpg'
	},
	{
		titulo: 'Spider-Man: un nuevo día',
		minutos: 144,
		estreno: 2026,
		poster: 'img/spiderman-un-nuevo-dia.jpg'
	},
	{
		titulo: 'Amos del Universo',
		minutos: 140,
		estreno: 2026,
		poster: 'img/amos-del-universo.jpg'
	}
];

// Capturo el elemento en el que mostrar las películas

let contenedor = document.querySelector('#cartelera');

// Recorro el array y agrego un div con una imagen para cada película del array
// Voy concatenando código HTML y el contenido de los objetos del array y luego lo muestro

for (let i = 0; i < peliculas.length; i++) {
	
	let tarjeta = '<div><p>' + peliculas[i].titulo + '<br>';
	tarjeta += '<img src="'+ peliculas[i].poster +'" alt="' + peliculas[i].titulo + '">'
	tarjeta += '</p></div>';
	
	contenedor.innerHTML += tarjeta;
}

