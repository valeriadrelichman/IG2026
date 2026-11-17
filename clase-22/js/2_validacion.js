// Como el formulario utiliza el atributo novalidate, la validación HTML5
// queda desactivada y es necesario validar todos los campos con JavaScript.

// Obtenemos el formulario y los campos que vamos a validar.
const formulario = document.querySelector("#formulario");
const campoNombre = document.querySelector("#nombre");
const campoEmail = document.querySelector("#email");
const mensajeError = document.querySelector("#mensaje-error");

// Validamos los datos cuando la persona intenta enviar el formulario.
formulario.addEventListener("submit", (evento) => {
  const nombre = campoNombre.value.trim();
  const email = campoEmail.value.trim();

  // Comprueba un formato básico: texto, arroba, texto, punto y dominio.
  const expresionEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  mensajeError.textContent = "";

  // Si el nombre está vacío, cancelamos el envío y mostramos un mensaje.
  if (nombre === "") {
    evento.preventDefault();
    mensajeError.textContent = "El nombre es obligatorio.";
    campoNombre.focus();
    return;
  }

  // Si el formato del email no es válido, también cancelamos el envío.
  if (!expresionEmail.test(email)) {
    evento.preventDefault();
    mensajeError.textContent = "Ingresá una dirección de email válida.";
    campoEmail.focus();
  }
});
