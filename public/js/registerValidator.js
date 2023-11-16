/*
const validations = [
    {
      field: "nombre",
      check: (input) => input.value.length >= 3 && input.value.length <= 30,
      message: "Debe contener al menos 3 caracteres y no mas de 30",
    },
    {
      field: "apellido",
      check: (input) => input.value.length >= 3 && input.value.length <= 30,
      message: "Debe contener al menos 3 caracteres y no mas de 30",
    },
    {
      field: "usuario",
      check: (input) => input.value.length >= 3 && input.value.length <= 35, //agregar que acepte letras, numeros y caracteres especiales, y revisar en bdd que no exista
      message: "Debe contener al menos 3 caracteres y no mas de 35",
    },
    {
      field: "email",
      check: (input) => validator.isEmail(input.value), //revisar que no exista en bdd
      message: "Debe ser un email valido",
    },
    {
      field: "contraseña",
      check: (input) => input.value.length >= 3 && input.value.length <= 35, //que acepte todo y requiera mayuscula y numero
      message: "Debe contener al menos 3 caracteres y no mas de 35",
    },
    {
      field: "contraseña2",
      check: (input) => input.value.length >= 5 && input.value.length <= 15, //revisar que sea igual que la contraseña
      message: "Debe contener al menos 3 caracteres y no mas de 35",
    },
  ];
  
  validations.forEach((validation) => {
    const inputId = validation.field;
    const input = document.getElementById(inputId);
    const inputErrorMsg = document.getElementById(inputId + "Error");
  
    function validate() {
      console.log("input.value", input.value);
      inputValidation(validation, input, inputErrorMsg);
    }
  
    input.addEventListener("blur", validate);
    input.addEventListener("input", validate);
  });
  
  const form = document.getElementById("form");
  
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const validationsResult = [];
  
    validations.forEach((validation) => {
      const inputId = validation.field;
      const input = document.getElementById(inputId);
      const inputErrorMsg = document.getElementById(inputId + "Error");
      const result = inputValidation(validation, input, inputErrorMsg);
      validationsResult.push(result);
    });
  
    if (validationsResult.every((val) => val == true)) {
      form.submit();
    }
  });
  
  function inputValidation(validation, input, inputErrorMsg) {
    if (!input.value) {
      inputErrorMsg.innerText = "El campo no debe estar vacío";
      inputErrorMsg.classList.add("display");
      return false;
    }
  
    if (!validation.check(input)) {
      inputErrorMsg.innerText = validation.message;
      inputErrorMsg.classList.add("display");
      return false;
    }
  
    inputErrorMsg.innerText = "";
    inputErrorMsg.classList.remove("display");
    return true;
  }
*/


