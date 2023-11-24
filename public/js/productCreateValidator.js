window.addEventListener('load', (event) => {
  event.preventDefault();

  const validations = [
    {
      field: "brand",
      check: (input) => input.value.length >= 3,
      message: "Debe contener al menos 3 caracteres",
    },
    {
      field: "name",
      check: (input) => input.value.length >= 5 && input.value.length <= 25,
      message: "Debe contener al menos 5 caracteres y no mas de 25",
    },
    {
      field: "description",
      check: (input) => input.value.length >= 50 && input.value.length <= 300,
      message: "Debe contener al menos 50 caracteres y no mas de 300",
    },
    {
      field: "detail",
      check: (input) => input.value.length >= 50 && input.value.length <= 600,
      message: "Debe contener al menos 50 caracteres y no mas de 600",
    },
    {
      field: "aditional",
      check: (input) => input.value.length >= 100 && input.value.length <= 900,
      message: "Debe contener al menos 100 caracteres y no mas de 900",
    },
    {
      field: "price",
      check: (input) => input.value.length >= 5 && input.value.length <= 15,
      message: "Debe ser un precio valido (Ej: 12456208.20, sin signo $)",
    },
    {
      field: "discount",
      check: (input) => input.value >= 0 && input.value <= 100 && validator.isNumeric(input.value) /*&& !validator.isDecimal(input.value)*/,
      message: "Debe ser un numero no decimal del 0 al 100 (ingresar 0 si no se desea descuento)",
    },
    {
      field: "rating",
      check: (input) => input.value >= 0 && input.value <= 5 && validator.isNumeric(input.value) /*&& !validator.isDecimal(input.value)*/,
      message: "Debe ser un numero del 0 al 5",
    },
    {
      field: "os",
      check: (input) => input.value.length >= 2 && input.value.length <= 20,
      message: "Debe contener al menos 2 caracteres y no mas de 20",
    },
    {
      field: "screen",
      check: (input) => input.value.length >= 10 && input.value.length <= 40,
      message: "Debe contener al menos 10 caracteres y no mas de 40",
    },
    {
      field: "camera",
      check: (input) => input.value.length >= 10 && input.value.length <= 40,
      message: "Debe contener al menos 10 caracteres y no mas de 40",
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
});

  