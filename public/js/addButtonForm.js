
/*
function add(){
    var newField = document.createElement('input');
    newField.setAttribute('type','text');
    newField.setAttribute('name','colors');
    newField.setAttribute('class','control');
    newField.setAttribute('placeholder','Color');
    formfield.appendChild(newField);
}

function remove(){
    var input_tags = formfield.getElementsByClassName('colors');
    if(input_tags.length > 2) {
        formfield.removeChild(input_tags[(input_tags.length) - 1]);
    }
}*/

const formfield = document.getElementById('color-field');

const addBtn = document.getElementById("addColor");
addBtn.addEventListener("click", () => {
    const inputColor = document.createElement("input");
    inputColor.setAttribute('id', 'colors');
    inputColor.setAttribute('type','text');
    inputColor.setAttribute('name','colors');
    inputColor.setAttribute('class','control');
    inputColor.setAttribute('placeholder','Color');
    formfield.appendChild(inputColor);
});

const removeBtn = document.getElementById("removeColor");
removeBtn.addEventListener("click", () => {
    const inputColor = document.querySelectorAll("#colors");
    formfield.removeChild(inputColor[(inputColor.length) - 1]);
});