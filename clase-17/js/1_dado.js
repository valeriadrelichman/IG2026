const dado = document.querySelector("#dado");
const puntajeElemento = document.querySelector("#puntaje");
const botonTirar = document.querySelector("#tirar");
const mensaje = document.querySelector("#mensaje");

let puntaje = 0;

botonTirar.addEventListener("click", tirarDado);

function tirarDado() {
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
  }, 1000);
}