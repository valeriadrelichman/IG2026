// ==========================================
// CONFIGURACIÓN Y SELECCIÓN DEL DOM
// ==========================================

// URL de la API: Solicitamos 5 preguntas de opción múltiple codificadas en formato URL
// El parámetro 'encode=url3986' pide a la API que envíe los textos codificados como URL (por ejemplo, los espacios se convierten en %20)
const endpoint = "https://opentdb.com/api.php?amount=5&type=multiple&encode=url3986";

// Selección de elementos de la interfaz para manipular visibilidad y contenido
const estado = document.querySelector("#estado");
const juego = document.querySelector("#juego");
const final = document.querySelector("#final");
const progreso = document.querySelector("#progreso");
const elementoPregunta = document.querySelector("#pregunta");
const opciones = document.querySelector("#opciones");
const resultado = document.querySelector("#resultado");
const siguiente = document.querySelector("#siguiente");
const puntaje = document.querySelector("#puntaje");
const reiniciar = document.querySelector("#reiniciar");
const reintentar = document.querySelector("#reintentar");


// ==========================================
// ESTADO DEL JUEGO
// ==========================================
let preguntas = [];  // Almacenará los objetos de las preguntas procesadas
let indice = 0;      // Controla la pregunta actual en pantalla
let correctas = 0;   // Contador de aciertos del usuario


// ==========================================
// FUNCIONES DE UTILIDAD
// ==========================================

// La función predeterminada decodeURIComponent() toma una cadena de texto codificada en formato URL y la transforma a caracteres normales
function decodificar(texto) {
  return decodeURIComponent(texto);
}

// Esta función recibe un array y devuelve una copia con los elementos mezclados
function mezclar(arreglo) {
  // Los ... son el operador spread que crea una copia del array para trabajar
  // El método .sort() ordena los elementos del array según el resultado de una función de comparación
  // La función () => Math.random() - 0.5 genera un número al azar entre 0 y 0.999 pero al restarle 0.5 el resultado será un número POSITIVO o NEGATIVO; si el resultado es negativo, .sort() pone un elemento antes y si es positivo, lo pone después
  return [...arreglo].sort(() => Math.random() - 0.5);
}

// Esta función actualiza la interfaz para mostrar un mensaje de error y permite reintentar 
function mostrarError(mensaje) {
  estado.textContent = mensaje;
  estado.className = "rojo";
  juego.classList.add("oculto");
  final.classList.add("oculto");
  reintentar.hidden = false;
}


// ==========================================
// LÓGICA PRINCIPAL DEL JUEGO
// ==========================================

async function cargarPreguntas() {
  // Restablece la interfaz al estado de "cargando"
  estado.className = "gris";
  estado.textContent = "Cargando preguntas...";
  juego.classList.add("oculto");
  final.classList.add("oculto");
  reintentar.hidden = true;
  siguiente.hidden = true;

  try {
    const respuesta = await fetch(endpoint);

    if (!respuesta.ok) {
      throw new Error(`HTTP ${respuesta.status}`);
    }

    const datos = await respuesta.json();

    if (datos.response_code !== 0 || datos.results.length < 5) {
      throw new Error("La API no devolvió cinco preguntas");
    }

    // Transformación de datos: limpiamos los datos que devolvió la API y preparamos las 5 preguntas con un formato más cómodo y con la codificación correcta
    // El método .map() ejecuta una función sobre cada elemento de un array y devuelve un nuevo array con los elementos modificados
    // El operador spread "desparrama" los elementos del array, por lo tanto en opciones estarán mezcladas en un único array tanto la respuesta correcta como las incorrectas
    preguntas = datos.results.map((pregunta) => ({
      texto: decodificar(pregunta.question),
      correcta: decodificar(pregunta.correct_answer),
      opciones: mezclar([
        decodificar(pregunta.correct_answer),
        ...pregunta.incorrect_answers.map(decodificar)
      ])
    }));

    // Reinicio de variables de control e inicio de la primera pregunta
    indice = 0;
    correctas = 0;
    estado.textContent = "Elegí una opción en cada pregunta";
    juego.classList.remove("oculto");
    mostrarPregunta();
  } catch (error) {
    mostrarError(`No se pudo cargar el quiz: ${error.message}`);
  }
}

// Muestra en el DOM la pregunta actual y los botones de opciones
function mostrarPregunta() {
  const actual = preguntas[indice];
  progreso.textContent = `Pregunta ${indice + 1} de ${preguntas.length}`;
  elementoPregunta.textContent = actual.texto;
  opciones.innerHTML = "";
  resultado.textContent = "";
  siguiente.hidden = true;

  // Genera dinámicamente un botón por cada opción disponible
  actual.opciones.forEach((opcion) => {
    const boton = document.createElement("button");
    boton.type = "button";
    boton.textContent = opcion;
    boton.addEventListener("click", () => responder(opcion));
    opciones.append(boton);
  });
}

// Procesa la elección del usuario, deshabilita los botones para evitar reintentos y muestra si es correcta
function responder(eleccion) {
  const actual = preguntas[indice];
  const botones = document.querySelectorAll("#opciones button");

  // Deshabilita todos los botones para bloquear que el usuario pueda elegir más de una respuesta
  botones.forEach((boton) => {
    boton.disabled = true;
  });

  // Verifica si la respuesta es correcta
  if (eleccion === actual.correcta) {
    correctas += 1;
    resultado.textContent = "Correcto";
  } else {
    resultado.textContent = `Incorrecto. La respuesta era: ${actual.correcta}`;
  }

  // Adapta el texto del botón según si es la última pregunta o no
  siguiente.textContent = indice === preguntas.length - 1
    ? "Ver resultado"
    : "Siguiente pregunta";
  siguiente.hidden = false;
}

// Pasa a la siguiente pregunta o muestra la pantalla final
function avanzar() {
  indice += 1;

  if (indice < preguntas.length) {
    mostrarPregunta();
  } else {
    // Fin del juego: oculta la pantalla de juego y muestra el puntaje final
    juego.classList.add("oculto");
    puntaje.textContent = `Respuestas correctas: ${correctas} de ${preguntas.length}`;
    final.classList.remove("oculto");
  }
}


// ==========================================
// EVENT LISTENERS E INICIALIZACIÓN
// ==========================================
siguiente.addEventListener("click", avanzar);
reiniciar.addEventListener("click", cargarPreguntas);
reintentar.addEventListener("click", cargarPreguntas);

// Primera llamada para iniciar el juego automáticamente al cargar la página
cargarPreguntas();