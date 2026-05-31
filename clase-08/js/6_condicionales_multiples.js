// Declaro las variables que voy a usar en el programa
let num;
let mensaje;
let mostrarResultado = document.querySelector('.resultado');

// Pido al usuario que ingrese un número
// Los convierto a número usando Number() porque el método prompt() siempre devuelve un string
num = Number(prompt('Ingrese un número entre 1 y 7',''));

switch(num) {
	case 1:
		mostrarResultado.innerText = 'Lunes';
		break;
	case 2:
		mostrarResultado.innerText = 'Martes';
		break;
	case 3:
		mostrarResultado.innerText = 'Miércoles';
		break;
	case 4:
		mostrarResultado.innerText = 'Jueves';
		break;
	case 5:
		mostrarResultado.innerText = 'Viernes';
		break;
	case 6:
		mostrarResultado.innerText = 'Sábado';
		break;
	case 7:
		mostrarResultado.innerText = 'Domingo';
		break;
	default:
		mostrarResultado.innerText = 'Error';
}
