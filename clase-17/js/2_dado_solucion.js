const dado = document.querySelector("#dado");
const puntajeElemento = document.querySelector("#puntaje");
const botonTirar = document.querySelector("#tirar");
const mensaje = document.querySelector("#mensaje");

let puntaje = 0;
let tirando = false;

botonTirar.addEventListener("click", tirarDado);

function tirarDado() {
  // Si ya hay una tirada en curso, ignoramos el nuevo click
  if (tirando) {
    return;
  }

  // Registramos que comenzó una tirada
  tirando = true;

  // Evitamos nuevos clicks mientras dura la animación
  botonTirar.disabled = true;

  mensaje.textContent = "Lanzando...";
  dado.textContent = "🎲";
  dado.classList.add("girando");

  setTimeout(() => {
    const resultado = Math.floor(Math.random() * 6) + 1;

    dado.textContent = resultado;
    puntaje += resultado;
    puntajeElemento.textContent = puntaje;
    mensaje.textContent = `Salió ${resultado}`;
    dado.classList.remove("girando");

    // Reseteamos la variable bandera y habilitamos nuevamente el botón
    tirando = false;
    botonTirar.disabled = false;
  }, 1000);
}