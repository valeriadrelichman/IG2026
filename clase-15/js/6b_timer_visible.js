// Capturo elementos
const texto = document.querySelector('.resultado');
const btn = document.querySelector('.btn');

// Expreso la función para el temporizador
const iniciarTemporizador = function() {
    
    // Defino la cantidad de segundos del temporizador y lo muestro en la página
    let tiempoRestante = 10;
    texto.innerText = `Tiempo restante: ${tiempoRestante} segundos`;

    btn.disabled = true; // Deshabilito el botón para que no inicie de nuevo

    // Defino el temporizador cada 1 segundo y actualizo el mensaje del tiempo restante
    const temporizador = setInterval(() => {
        tiempoRestante--;
        texto.innerText = `Tiempo restante: ${tiempoRestante} segundos`;

        // Si el temporizador llega a 0 se detiene y se vuelve a habilitar el botón
        if (tiempoRestante <= 0) {
            clearInterval(temporizador);
            texto.innerText = 'Tiempo terminado';
            btn.disabled = false;
        }
    }, 1000);
}

// Evento 
btn.addEventListener('click', iniciarTemporizador);
