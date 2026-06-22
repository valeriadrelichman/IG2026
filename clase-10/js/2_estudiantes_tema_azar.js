// Hacer un programa permita ingresar a través de un formulario los datos personales (nombre, apellido y DNI) de 5 estudiantes y los guarde. Antes de guardarlos, se deben validar los datos. A cada estudiante se le debe asignar un tema de parcial entre 9 temas disponibles. Luego mostrar en la página una lista indicando el apellido y el tema asignado.

// Declaro las variables
const cantidad = 5;
let estudiantes = [];  // Array de objetos para guardar los datos

// Capturo los elementos del DOM
let formIngresoDatos = document.querySelector('#ingresoDatos');
let btnIngresar = document.querySelector('#ingresar');
let lista = document.querySelector('.listado');

// Defino evento para el botón de ingresar datos
btnIngresar.addEventListener('click', function(e) {
    // Uso preventDefault para que no se recargue la página
    e.preventDefault();
    ingresarDatos();
});

// Defino función para el ingreso de los datos de cada estudiante
function ingresarDatos() {
    
    // Capturo el valor que ingresó el usuario en el campo nombre
    let nombreEstudiante = document.querySelector('#nombre').value;
    // Valido que el nombre no esté vacío
    if (nombreEstudiante == '') {
        alert('El nombre no puede estar vacío');
        return false;
    }
    
	// Capturo el valor que ingresó el usuario en el campo apellido
    let apellidoEstudiante = document.querySelector('#apellido').value;
    // Valido que el nombre no esté vacío
    if (apellidoEstudiante == '') {
        alert('El apellido no puede estar vacío');
        return false;
    }

	// Capturo el valor que ingresó el usuario en el campo dni
    let dniEstudiante = document.querySelector('#dni').value;
    // Valido que el nombre no esté vacío y que sea un número
    if (dniEstudiante == '' || isNaN(dniEstudiante)) {
        alert('El DNI debe ser un número');
        return false;
    }
   

    // Creo un objeto con los datos ingresados
    let nuevoEstudiante = {
        nombre: nombreEstudiante,
        apellido: apellidoEstudiante,
        dni: dniEstudiante
    }
    // Agrego el objeto al array
    estudiantes.push(nuevoEstudiante);
    alert('Datos ingresados correctamente');

    // Llamo a la función para vaciar el formulario 
    vaciarDatosFormulario();
}

// Defino la función para limpiar el formulario
function vaciarDatosFormulario() {
    document.querySelector('#nombre').value = '';
    document.querySelector('#apellido').value = '';
    document.querySelector('#dni').value = '';

	// Llamo a la función que verifica si ya se ingresaron todos los datos
	verificarCantidadDatos();
}

// Defino la función para verificar si ya se ingresaron todos los datos, si ya se ingresaron deshabilito la opción de ingresar más datos, genero los temas al azar y muestro el listado

function verificarCantidadDatos() {
	if(estudiantes.length>=cantidad) {
		btnIngresar.disabled = true;
		asignarTema();
		mostrarListado();
	}
}

// Defino la función para asignar un tema al azar a cada estudiante

function asignarTema() {
	// Recorro el array y a cada estudiante le asigno un nuevo tema al azar
	for (let i = 0; i < estudiantes.length; i++) {
		let azar = Math.floor(Math.random()*9)+1;
		estudiantes[i].tema = azar; 
	}
}

// Defino la función para mostrar el listado

function mostrarListado() {
	// Recorro el array y agrego un elemento a la lista para cada estudiante con el tema correspondiente
	for (let i = 0; i < estudiantes.length; i++) {
		lista.innerHTML += '<li>Apellido: ' + estudiantes[i].apellido + ' - Tema: ' + estudiantes[i].tema + '</li>';
	}
}