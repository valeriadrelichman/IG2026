// Función que recibe dos números como parámetros y retorna la suma
// Declaración de la función

function sumar(a,b){
	let resultado = a + b;
	return resultado;
}


// Invocación a la función

let retorno = sumar(4,5);
console.log(retorno);


// Otra invocación con datos distintos

retorno = sumar(2,3);
console.log(retorno);


// Invocación utilizando datos pedidos al usuario

let num1 = Number(prompt('Ingrese un número',''));
let num2 = Number(prompt('Ingrese un número',''));

retorno = sumar(num1,num2);
let mostrarResultado = document.querySelector('.resultado');
mostrarResultado.innerText = retorno;

