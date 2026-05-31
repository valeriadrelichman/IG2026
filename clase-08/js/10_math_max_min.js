// Declaro las variables que voy a usar en el programa
let mostrarResultado = document.querySelector('.resultado');
let mostrarResultado2 = document.querySelector('.otroResultado');
let mayor;
let menor;

// Métodos para encontrar el mayor y el menor de una lista
mayor = Math.max(5,23,56,24,14);
menor = Math.min(5,23,56,24,14);

mostrarResultado.innerHTML = 'El mayor es ' + mayor;
mostrarResultado2.innerHTML = 'El menor es ' + menor;

