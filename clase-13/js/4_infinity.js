// Resolución usando el primer valor de la lista

let numeros = [5, 8, -3, 11, 23, 2, 9];
let min = numeros[0]; // primer valor

for (let i=0; i<numeros.length; i++) {
    if (numeros[i] < min) {
        min = numeros[i];
    }
}
console.log(min);

// Resolución usando Infinity

let numeros2 = [4, 14, 21, -2, 17, -5];
let min2 = Infinity;

for (let i=0; i<numeros2.length; i++) {
    if (numeros2[i] < min2) {
        min2 = numeros2[i];
    }
}
console.log(min2);