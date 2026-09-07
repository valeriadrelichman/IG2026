
// Timer, se ejecuta cada 1 segundo
id = setInterval(() => console.log('Hola'), 2000);

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    // Detengo el timer
    clearInterval(id);
    console.log('Chau');
});