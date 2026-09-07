// Para agregar un dato a un array guardado en el localStorage son varios pasos
// Recordar que se guarda un string, no un array

// 1. Recuperar información del localStorage (tenemos que saber con qué nombre está guardado)
let datosRecuperados = localStorage.getItem('nombresStorage');

// 2. Convertir de nuevo a array
let nombresRecuperados = JSON.parse(datosRecuperados);

// 3. Agregar un dato al array
nombresRecuperados.push('Pepa');

// 4. Convertir a string en formato JSON
datosRecuperados = JSON.stringify(nombresRecuperados)

// 5. Guardar en localStorage nuevamente el array completo
localStorage.setItem('nombresStorage',datosRecuperados);

console.log(localStorage);