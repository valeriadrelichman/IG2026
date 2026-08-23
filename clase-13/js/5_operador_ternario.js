// EJEMPLO 1
// Determinar si un número es par o impar

let num = 23;
let resultado;

// Con estructura if / else

if (num % 2 == 0) {
    resultado = 'Es par';
} else {
    resultado = 'Es impar';
}
console.log(resultado);

// Con operador ternario

resultado = num % 2 == 0 ? 'Es par' : 'Es impar';
console.log(resultado);



// EJEMPLO 2
// Asignar un valor conceptual a una nota numérica

let nota = 7;
let valor;

// Con estructura if / else

if (nota >= 9) {
    valor = "Excelente";
} else if (nota >= 7) {
    valor = "Bien";
} else if (nota >= 4) {
    valor = "Regular";
} else {
    valor = "Insuficiente";
}
console.log(valor);

// Con operador ternario

valor = nota >= 9 ? "Excelente"
        : nota >= 7 ? "Bien" 
        : nota >= 4 ? "Regular" 
        : "Insuficiente";

console.log(valor);
