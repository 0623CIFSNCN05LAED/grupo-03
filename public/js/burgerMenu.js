window.addEventListener('load', () => {

    const burgerMenu = document.querySelector('.fa-bars');
    const menu = document.getElementById('menu');

    burgerMenu.addEventListener('click', () => {
        menu.classList.toggle('mostrarMenu');
    })
});    