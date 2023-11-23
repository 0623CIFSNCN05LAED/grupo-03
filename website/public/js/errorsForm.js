/*const controlField = document.querySelectorAll(".control-formulario");
for (let i = 0; i < controlField.length; i++) {
    const formField = document.querySelector(".control-formulario .error-msg");
    if (formField) 
    {
        controlField[i].classList.add('error-field');
    }
}*/



/*
const formField = document.querySelectorAll(".control-formulario");
const pField = document.querySelectorAll(".error-msg");

for (let i = 0; i < formField.length; i++) {
    if (formField[i].contains(pField[i])) {
        formField[i].classList.add('error-field');
    } else {
        formField[i].classList.remove('error-field');
    }
    
}*/


const formField = document.querySelectorAll(".control-formulario");
const pField = document.querySelector(".error-msg");

for (let i = 0; i < formField.length; i++) {
    if (formField[i].contains(pField)) {
        formField[i].classList.add('error-field');
    } else {
        formField[i].classList.remove('error-field');
    }
}