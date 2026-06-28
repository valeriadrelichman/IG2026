// Defino variables
let datosJugadores = [
    {nombre: 'Nicolás', puntaje: 0, sumar: function(){this.puntaje++}},
    {nombre: 'Fernanda', puntaje: 0, sumar: function(){this.puntaje++}},
    {nombre: 'Alex', puntaje: 0, sumar: function(){this.puntaje++}}
];

// Capturo los elementos del DOM
let nombreJugador1 = document.querySelector('#nombre1');
let puntajeJugador1 = document.querySelector('#puntaje1');
let nombreJugador2 = document.querySelector('#nombre2');
let puntajeJugador2 = document.querySelector('#puntaje2');
let nombreJugador3 = document.querySelector('#nombre3');
let puntajeJugador3 = document.querySelector('#puntaje3');

let btn1 = document.querySelector('#gano1');
let btn2 = document.querySelector('#gano2');
let btn3 = document.querySelector('#gano3');
let btnReiniciar = document.querySelector('#reiniciar');

// Función para mostrar información
function mostrarInformacion() {
    nombreJugador1.value = datosJugadores[0].nombre;
    puntajeJugador1.value = datosJugadores[0].puntaje;
    nombreJugador2.value = datosJugadores[1].nombre;
    puntajeJugador2.value = datosJugadores[1].puntaje;
    nombreJugador3.value = datosJugadores[2].nombre;
    puntajeJugador3.value = datosJugadores[2].puntaje;
}

mostrarInformacion();

// Función para reiniciar contadores
function reiniciarPuntajes() {
    for (let i=0; i<datosJugadores.length; i++) {
        datosJugadores[i].puntaje = 0;
    }
    mostrarInformacion();
}

// Eventos 

btn1.addEventListener('click', function(e) {
    e.preventDefault();
    datosJugadores[0].sumar();
    mostrarInformacion();
});

btn2.addEventListener('click', function(e) {
    e.preventDefault();
    datosJugadores[1].sumar();
    mostrarInformacion();
});

btn3.addEventListener('click', function(e) {
    e.preventDefault();
    datosJugadores[2].sumar();
    mostrarInformacion();
});

btnReiniciar.addEventListener('click', function(e) {
    e.preventDefault();
    reiniciarPuntajes();
});
