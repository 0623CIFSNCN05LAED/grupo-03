window.addEventListener('load', () => {
    const form = document.getElementById("form");
    const email = document.getElementById("email");
    const contraseña = document.getElementById("password");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      let errors = false;
  
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
      const emailValue = email.value.trim();
      const contraseñaValue = contraseña.value.trim();
  
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

    };
});
  
  