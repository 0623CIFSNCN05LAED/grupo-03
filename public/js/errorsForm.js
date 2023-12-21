const formField = document.querySelectorAll(".control-formulario");
const pField = document.querySelector(".error-msg");

for (let i = 0; i < formField.length; i++) {
    if (formField[i].contains(pField)) {
        formField[i].classList.add('error-field');
    } else {
        formField[i].classList.remove('error-field');
    }
}