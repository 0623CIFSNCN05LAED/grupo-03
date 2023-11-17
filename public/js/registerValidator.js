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

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const usuario = document.getElementById("usuario");
const email = document.getElementById("email");
const contraseña = document.getElementById("contraseña");
const contraseña2 = document.getElementById("contraseña2");
const images = document.getElementById("images");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const errors = false;

  validateInputs();

  if (errors != true) {
    console.log("submit");
    form.submit();
  }
  //si no hay errores, enviar el form
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");

  errors = true;
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const validateInputs = () => {
  const nombreValue = nombre.value.trim();
  const apellidoValue = apellido.value.trim();
  const usuarioValue = usuario.value.trim();
  const emailValue = email.value.trim();
  const contraseñaValue = contraseña.value.trim();
  const contraseña2Value = contraseña2.value.trim();
  const imagesValue = images.value.trim();

  //name validation
  if (nombreValue === "") {
    setError(nombre, "Debe ingresar un nombre");
  } else if (!validator.isAlpha(nombreValue)) {
    setError(nombre, "El nombre solo puede contener letras");
  } else if (nombreValue.length < 3 || nombreValue.length > 30) {
    setError(nombre, "Debe contener al menos 3 caracteres y no mas de 30");
  } else {
    setSuccess(nombre);
  }

  //last name validation
  if (apellidoValue === "") {
    setError(apellido, "Debe ingresar un apellido");
  } else if (!validator.isAlpha(apellidoValue)) {
    setError(apellido, "El apellido solo puede contener letras");
  } else if (apellidoValue.length < 3 || apellidoValue.length > 30) {
    setError(apellido, "Debe contener al menos 3 caracteres y no mas de 30");
  } else {
    setSuccess(apellido);
  }

  //username validation
  if (usuarioValue === "") {
    setError(usuario, "Debe ingresar un usuario");
  } else if (usuarioValue.length < 3 || usuarioValue.length > 35) {
    setError(usuario, "Debe contener al menos 3 caracteres y no mas de 35");
  } else {
    setSuccess(usuario);
  }

  //email validation
  if (emailValue === "") {
    setError(email, "Debe ingresar un email");
  } else if (!validator.isEmail(emailValue)) {
    setError(email, "Ingrese un email válido");
  } else {
    setSuccess(email);
  }

  //password validation
  if (contraseñaValue === "") {
    setError(contraseña, "Debe ingresar una contraseña");
  } else if (contraseñaValue.length < 8 || contraseñaValue.length > 30) {
    setError(contraseña, "Debe contener al menos 8 caracteres y no mas de 30");
  } else if (!validator.isStrongPassword(contraseñaValue)) {
    setError(
      contraseña,
      "La contraseña es debil. Debe contener por lo menos 1 minuscula, 1 mayuscula, 1 numero y 1 simbolo"
    );
  } else {
    setSuccess(contraseña);
  }

  //repassword validation
  if (contraseña2Value === "") {
    setError(contraseña2, "Debe ingresar una contraseña");
  } else if (contraseña2Value !== contraseñaValue) {
    setError(contraseña2, "Las contraseñas con coinciden");
  } else {
    setSuccess(contraseña2);
  }

  //images validation (revisar que se suba una imagen)
  /*if (images === null) {
    setError(images, 'Debe ingresar una imágen');
  } else {
    setSuccess(images);
  }*/
};
