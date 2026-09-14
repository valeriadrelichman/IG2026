const endpoint = "https://opentdb.com/api.php?amount=1&type=boolean";
const estado = document.querySelector("#estado");
const elementoPregunta = document.querySelector("#pregunta");
const opciones = document.querySelector("#opciones");
const resultado = document.querySelector("#resultado");
const nueva = document.querySelector("#nueva");
let respuestaCorrecta = "";


function mostrarError(mensaje) {
  estado.textContent = mensaje;
  estado.className = "rojo";
  elementoPregunta.textContent = "";
  opciones.innerHTML = "";
  resultado.textContent = "";
  nueva.hidden = false;
}

async function cargarPregunta() {
  estado.className = "gris";
  estado.textContent = "Cargando pregunta...";
  elementoPregunta.textContent = "";
  opciones.innerHTML = "";
  resultado.textContent = "";
  nueva.hidden = true;

  try {
    const respuesta = await fetch(endpoint);

    if (!respuesta.ok) {
      throw new Error(`HTTP ${respuesta.status}`);
    }

    const datos = await respuesta.json();

    if (datos.response_code !== 0 || datos.results.length === 0) {
      throw new Error("La API no devolvió una pregunta.");
    }

    const pregunta = datos.results[0];
    respuestaCorrecta = pregunta.correct_answer;
    elementoPregunta.innerHTML = pregunta.question;
    estado.textContent = "Elegí verdadero o falso";

    ["True", "False"].forEach((valor) => {
      const boton = document.createElement("button");
      boton.type = "button";
      boton.textContent = valor === "True" ? "Verdadero" : "Falso";
      boton.addEventListener("click", () => responder(valor, boton));
      opciones.append(boton);
    });
  } catch (error) {
    mostrarError(`No se pudo cargar la pregunta: ${error.message}`);
  }
}

function responder(eleccion, botonElegido) {
  document.querySelectorAll("#opciones button").forEach((boton) => {
    boton.disabled = true;
  });

  if (eleccion === respuestaCorrecta) {
    resultado.textContent = "Correcto";
  } else {
    resultado.textContent = `Incorrecto. La respuesta era ${respuestaCorrecta === "True" ? "Verdadero" : "Falso"}.`;
  }

  botonElegido.focus();
  nueva.hidden = false;
}

nueva.addEventListener("click", cargarPregunta);
cargarPregunta();