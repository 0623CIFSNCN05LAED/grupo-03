var formfield = document.getElementById('color-field');

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
}