<?php

// Este archivo debe recibir datos enviados mediante el método POST.
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
  header("Location: ej_2_form_para_php.html");
  exit;
}

// Recuperamos los datos enviados por el formulario.
$nombre = trim($_POST["nombre"] ?? "");
$email = trim($_POST["email"] ?? "");
$comentarios = trim($_POST["comentarios"] ?? "");

// Validamos nuevamente los datos en el servidor.
if ($nombre === "" || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
  header("Location: ej_2_form_para_php.html");
  exit;
}

// Dirección de correo que recibirá el mensaje.
$destinatario = "nombre@dominio.com";

// Asunto y contenido del mensaje.
$asunto = "Formulario de contacto";
$mensaje = "Nombre: $nombre\n";
$mensaje .= "Email: $email\n";
$mensaje .= "Comentarios: $comentarios\n";

// Encabezados del correo.
// Reply-To permite responder utilizando el email ingresado en el formulario.
$encabezados = "From: formulario@dominio.com\r\n";
$encabezados .= "Reply-To: $email\r\n";
$encabezados .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Enviamos el mensaje y redirigimos a una página HTML independiente.
mail($destinatario, $asunto, $mensaje, $encabezados);
header("Location: ej_2_gracias.html");
exit;
