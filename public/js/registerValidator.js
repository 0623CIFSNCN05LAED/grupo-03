const form = document.getElementById("form");
const nombre = document.getElementById("name");
const apellido = document.getElementById("last_name");
const usuario = document.getElementById("username");
const email = document.getElementById("email");
const contraseña = document.getElementById("password");
const contraseña2 = document.getElementById("password2");
const images = document.getElementById("profile_picture");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const errors = false;

  validateInputs();

  if (errors != true) {
    console.log("submit");
    form.submit();
  }
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
  } else if (nombreValue.length < 3 || nombreValue.length > 35) {
    setError(nombre, "Debe contener al menos 3 caracteres y no mas de 35");
  } else {
    setSuccess(nombre);
  }

  //last name validation
  if (apellidoValue === "") {
    setError(apellido, "Debe ingresar un apellido");
  } else if (!validator.isAlpha(apellidoValue)) {
    setError(apellido, "El apellido solo puede contener letras");
  } else if (apellidoValue.length < 3 || apellidoValue.length > 35) {
    setError(apellido, "Debe contener al menos 3 caracteres y no mas de 35");
  } else {
    setSuccess(apellido);
  }

  //username validation
  if (usuarioValue === "") {
    setError(usuario, "Debe ingresar un usuario");
  } else if (usuarioValue.length < 3 || usuarioValue.length > 20) {
    setError(usuario, "Debe contener al menos 3 caracteres y no mas de 20");
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

  //images validation
  /*if (images === null) {
    setError(images, 'Debe ingresar una imágen');
  } else {
    setSuccess(images);
  }*/
};
