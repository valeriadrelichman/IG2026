// Capturo botones

const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');

// Contador 1
// Evento en el HTML - NO RECOMENDADO

let contador1 = 0;
function contar1() {
    contador1++;
    btn1.innerText = 'Clicks: ' + contador1;
}

// Contador 2
// Evento fijo - NO RECOMENDADO

let contador2 = 0;
function contar2() {
    contador2++;
    btn2.innerText = 'Clicks: ' + contador2;
}
btn2.onclick = contar2;

// Contador 3
// Con addEventListener - RECOMENDADO

let contador3 = 0;
function contar3() {
    contador3++;
    btn3.innerText = 'Clicks: ' + contador3;
}
btn3.addEventListener('click', contar3);


// Función mensaje
function mensaje(){
    alert('Hola');
}

// Llamado a la función mensaje

// btn2.onclick = mensaje;
// btn3.addEventListener('click', mensaje);

