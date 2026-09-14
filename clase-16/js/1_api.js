// URL de la API a la que hacemos el pedido de datos
const url = 'https://opentdb.com/api.php?amount=1&type=multiple';
// Elemento del DOM en el que mostramos los datos o los mensajes de error
const texto = document.querySelector('.resultado');

// Usamos async para manejar tareas de forma asincrónica: pedidos que pueden demorar y esperamos con await
async function obtenerPregunta() {
  try {
    
    // Petición HTTP
    const respuesta = await fetch(url);

    // Validación del estado de la respuesta HTTP (ej. 200 OK)
    if (!respuesta.ok) {
      throw new Error(`HTTP ${respuesta.status}`);
    }

    // Convertimos la respuesta de formato JSON a un objeto JavaScript
    const datos = await respuesta.json();

    // Verificamos estructura de datos devuelta por OpenTDB
    if (datos.response_code !== 0 || datos.results.length === 0) {
      throw new Error("La API no devolvió preguntas.");
    }

    // Usamos la primera pregunta del array
    const pregunta = datos.results[0];

    // Mostramos en la página los datos recibidos de forma ordenada
    texto.innerHTML = `
    <strong>Pregunta:</strong> ${pregunta.question}<br>
    <strong>Respuesta correcta:</strong> ${pregunta.correct_answer}<br>
    <strong>Respuestas incorrectas:</strong> ${pregunta.incorrect_answers.join(', ')}
    `;
    
  } catch (error) {
    // Capturamos cualquier error lanzado (throw) e informamos al usuario 
    texto.innerHTML = `<strong>Error:</strong> No se pudo obtener la pregunta (${error.message})`
  }
}

// Invocación para ejecutar la función
obtenerPregunta();