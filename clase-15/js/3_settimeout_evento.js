
console.log('Hola');

// Timer, se ejecuta a los 5 segundos
setTimeout(() => console.log('Chau'), 5000);



const btn = document.querySelector('.btn');

// Evento que ejecuta un timer de 3 segundos
btn.addEventListener('click', () => {
    setTimeout(() => console.log('Click en el botón'), 3000);
});
