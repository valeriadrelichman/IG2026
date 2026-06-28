// Defino variables
const cantPersonas = 6;
let datosPersonas = [];

// Capturo los elementos del DOM
let formIngresoDatos = document.querySelector('#ingresoDatos');
let btnIngresar = document.querySelector('#ingresar');
let pResultados = document.querySelector('.resultado');

// Defino eventos
btnIngresar.addEventListener('click', function(e) {
    // Uso preventDefault para que no se recargue la página
    e.preventDefault();
    ingresarDatos();
});

// Defino función para el ingreso de los datos de una persona
function ingresarDatos() {
    
    // Capturo el valor que ingresó el usuario en el campo nombre
    let nombrePersona = document.querySelector('#nombre').value;
    // Valido que el nombre no esté vacío
    if (nombrePersona == '') {
        alert('El nombre no puede estar vacío');
        return false;
    }
    // Capturo el valor que ingresó el usuario en el campo apellido
    let apellidoPersona = document.querySelector('#apellido').value;
    // Valido que el nombre no esté vacío
    if (apellidoPersona == '') {
        alert('El apellido no puede estar vacío');
        return false;
    }
    // Capturo el valor que ingresó el usuario en el campo edad
    let edadPersona = Number(document.querySelector('#edad').value);
    // Valido que la edad no esté vacío y sea un número igual o mayor a 0
    if (edadPersona == '' || isNaN(edadPersona) || edadPersona<0) {
        alert('La edad no es un dato correcto');
        return false;
    }

    // Creo un objeto con los datos ingresados
    let nuevaPersona = {
        nombre: nombrePersona,
        apellido: apellidoPersona,
        edad: edadPersona
    }
    // Agrego el objeto al array
    datosPersonas.push(nuevaPersona);

    // Llamo a las funciones para vaciar el formulario y verificar la cantidad de datos ingresados
    vaciarDatosFormulario();
    verificarCantidad();
}

// Defino función para limpiar el formulario
function vaciarDatosFormulario() {
    document.querySelector('#nombre').value = '';
    document.querySelector('#apellido').value = '';
    document.querySelector('#edad').value = '';
}

// Defino función para verificar si ya se ingresaron todos los datos
function verificarCantidad() {
    // Si ya se cargaron todos los datos, oculto el formulario y muestro el resultado
    if (datosPersonas.length==cantPersonas) {
        formIngresoDatos.style.display = 'none';
        pResultados.style.display = 'block';
        let mostrarMensaje = calcularResultados();
        pResultados.innerText = mostrarMensaje;
    }
}

// Defino función para calcular y mostrar resultados
function calcularResultados() {
    // Defino que la primera persona es la menor para poder comparar con las demás
    let personaMenor = datosPersonas[0];
    // Recorro el array para encontrar a la persona menor
    // En cada ciclo comparo la edad y si es menor, guardo el objeto que está en esa posición como persona menor
    for (let i=0; i<datosPersonas.length; i++) {
        if (datosPersonas[i].edad < personaMenor.edad) {
            personaMenor = datosPersonas[i];
        }
    }
    // Concateno el mensaje para hacer return
    let mensaje = `La persona de menor edad es ${personaMenor.nombre} ${personaMenor.apellido} con ${personaMenor.edad} años.`;
    return mensaje;
}


