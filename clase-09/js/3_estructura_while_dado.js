// Hacer un programa que tire un dado y siga tirando hasta que sale el número 6. Mostrar por consola todas las tiradas.
let dado = Math.floor(Math.random() * 6) + 1;
console.log('El dado sorteado es ' + dado);

while (dado != 6) {
	dado = Math.floor(Math.random() * 6) + 1;
	console.log('El dado sorteado es ' + dado);
}