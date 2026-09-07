// Para guardar un array en localStorage son varios pasos
// Recordar que hay que convertir a JSON

// 1. Crear array
let nombres = ['Pepe', 'Ana', 'Pipo'];

// 2. Convertir a string en formato JSON
let nombresString = JSON.stringify(nombres);

// 3. Guardar propiedad y valor en localStorage
localStorage.setItem('nombresStorage',nombresString);

console.log(localStorage);

// Los datos guardados en el localStorage los podemos usar desde cualquier otra página