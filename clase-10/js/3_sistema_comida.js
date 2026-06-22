// Armar un sistema que permita ingresar a través de un formulario los siguientes datos: nombre de la persona, opción de comida y opción de bebida. Las opciones de comida son pasta, pollo o ensalada. Las opciones de bebida son agua con gas, agua sin gas o gaseosa. Un botón permite ingresar los datos de una persona por vez. Otros dos botones muestran el total de cada comida y el total de cada bebida.


// Defino variables
let pedidos = [];

// Capturo los elementos del DOM
let formIngresoDatos = document.querySelector('#ingresoDatos');
let btnIngresar = document.querySelector('#ingresar');
let btnPedidoComidas = document.querySelector('#pedidoComidas');
let btnPedidoBebidas = document.querySelector('#pedidoBebidas');

// Primero defino todos los eventos
// Defino evento para el botón de ingresar datos
btnIngresar.addEventListener('click', function(e) {
    // Uso preventDefault para que no se recargue la página
    e.preventDefault();
    ingresarDatos();
});

// Defino evento para el botón de mostrar comidas
btnPedidoComidas.addEventListener('click', function(e) {
    // Uso preventDefault para que no se recargue la página
    e.preventDefault();
    contarPedidosComida();
});

// Defino evento para el botón de mostrar comidas
btnPedidoBebidas.addEventListener('click', function(e) {
    // Uso preventDefault para que no se recargue la página
    e.preventDefault();
    contarPedidosBebida();
});



// Después defino todas las funciones
// Defino función para el ingreso de los datos de una persona
function ingresarDatos() {
    
    // Capturo el valor que ingresó el usuario en el campo nombre
    let nombrePersona = document.querySelector('#nombre').value;
    // Valido que el nombre no esté vacío
    if (nombrePersona == '') {
        alert('El nombre no puede estar vacío');
        return false;
    }
    
    // Capturo el valor de la opción de comida y de la opción de bebida
    let opcionComida = document.querySelector('#comida').value;
	let opcionBebida = document.querySelector('#bebida').value;

    // Creo un objeto con los datos ingresados
    let nuevoPedido = {
        nombre: nombrePersona,
        comida: opcionComida,
        bebida: opcionBebida
    }
    // Agrego el objeto al array
    pedidos.push(nuevoPedido);
    alert('Datos ingresados correctamente');

    // Llamo a la función para vaciar el formulario 
    vaciarDatosFormulario();
}

// Defino función para limpiar el formulario
function vaciarDatosFormulario() {
    document.querySelector('#nombre').value = '';
    document.querySelector('#comida').value = '';
    document.querySelector('#bebida').value = '';
}


// Defino función para contar cuántos son los pedidos de cada opción de comida y mostrar los resultados en la página
function contarPedidosComida() {

	// Declaro e inicializo las variables contador para cada opción de comida
	let cantPasta = 0;
	let cantPollo = 0;
	let cantEnsalada = 0;

	// Recorro el array para contar qué eligió cada persona
	for (let i = 0; i < pedidos.length ; i++) {
		switch(pedidos[i].comida){
		case 'pasta': cantPasta++; break;
		case 'pollo': cantPollo++; break;
		case 'ensalada': cantEnsalada++; break;
		}
	}

	let pComidas = document.querySelector('.comidas');

	pComidas.innerText = 'Los pedidos de comida son: ' + cantPasta + ' menú/s de pasta, ' + cantPollo + ' menú/s de pollo y ' + cantEnsalada + ' menú/s de ensalada.';
}


// Defino función para contar cuántos son los pedidos de cada opción de bebida y mostrar los resultados en la página
function contarPedidosBebida() {

	// Declaro e inicializo las variables contador para cada opción de comida
	let cantConGas = 0;
	let cantSinGas = 0;
	let cantGaseosa = 0;

	// Recorro el array para contar qué eligió cada persona
	for (let i = 0; i < pedidos.length ; i++) {
		switch(pedidos[i].bebida){
		case 'congas': cantConGas++; break;
		case 'singas': cantSinGas++; break;
		case 'gaseosa': cantGaseosa++; break;
		}
	}

	let pBebidas = document.querySelector('.bebidas');

	pBebidas.innerText = 'Los pedidos de bebida son: ' + cantConGas + ' botella/s de agua con gas, ' + cantSinGas + ' botella/s de agua sin gas y ' + cantGaseosa + ' botella/s de gaseosa.';
}

