// Hacer un programa que tire un dado y siga tirando hasta que sale el número 1. Mostrar por consola todas las tiradas.
let dado;

do {
	dado = Math.floor(Math.random() * 6) + 1;
	console.log('El dado sorteado es ' + dado);
} while (dado != 1)