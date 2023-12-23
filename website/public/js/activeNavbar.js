const btnMenu = document.querySelectorAll('li a');

btnMenu.forEach(btn => {
    btn.addEventListener('click', function () {
        btnMenu.forEach(button => button.classList.remove('active'));
        this.classList.add('active');
    })
})