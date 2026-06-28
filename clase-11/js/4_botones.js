// Capturo los elementos del DOM

let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');

// Defino los eventos para habilitar y deshabilitar

btn1.addEventListener('click', function() {
    this.disabled = true;
    btn2.disabled = false;
});

btn2.addEventListener('click', function() {
    this.disabled = true;
    btn1.disabled = false;
});

// Defino el evento para volver a la index usando location

btn3.addEventListener('click', function() {
    location.href = 'index.html';
});