window.addEventListener('load', () => {
  const form = document.getElementById("form");
  const nombre = document.getElementById("name");
  const descripcion = document.getElementById("description");
  const descripcion_destacada = document.getElementById("featured_desc");
  const images = document.getElementById("images");
  const precio = document.getElementById("price");
  const descuento = document.getElementById("discount");
  const calificacion = document.getElementById("rating");
  const destacado = document.querySelectorAll('input[name="featured"]');
  let a = 0;
  const sistema = document.getElementById("os");
  const pantalla = document.getElementById("screen");
  const camara = document.getElementById("camera");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let errors = false;
    let errors2 = false;
    
  const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");

    console.log(errors);
    errors = true;
  };

  const setError2 = (element, message) => {
    const inputControl = document.querySelector(".category-form");
    const errorDisplay = document.querySelector(".error2");

    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");

    console.log(errors2);
    errors2 = true;
  };

  const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = "";
    inputControl.classList.add("success");
    inputControl.classList.remove("error");
  };

  const setSuccess2 = (element) => {
    const inputControl = document.querySelector(".category-form");
    const errorDisplay = document.querySelector(".error2");

    errorDisplay.innerText = "";
    inputControl.classList.add("success");
    inputControl.classList.remove("error");
  };

  const validateInputs = () => {
    const nombreValue = nombre.value.trim();
    const descripcionValue = descripcion.value.trim();
    const descripcion_destacadaValue = descripcion_destacada.value.trim();
    const precioValue = precio.value.trim();
    const descuentovalue = descuento.value.trim();
    const calificacionValue = calificacion.value.trim();
    const sistemaValue = sistema.value.trim();
    const pantallaValue = pantalla.value.trim();
    const camaraValue = camara.value.trim();
    

    //name validation
    if (nombreValue === "") {
      setError(nombre, "Debe ingresar un nombre");
    } else if (!validator.isAlphanumeric(nombreValue)) {
      setError(nombre, "El nombre solo puede contener letras y numeros");
    } else if (nombreValue.length < 5 || nombreValue.length > 80) {
      setError(nombre, "Debe contener al menos 5 caracteres y no mas de 80");
    } else {
      setSuccess(nombre);
    }

    //description validation
    if (descripcionValue === "") {
      setError(descripcion, "Debe ingresar una descripcion");
    } else if (descripcionValue.length < 100 || descripcionValue.length > 1300) {
      setError(descripcion, "Debe contener al menos 100 caracteres y no mas de 1300");
    } else {
      setSuccess(descripcion);
    }

    //featured validation
    for (let i = 0; i < destacado.length; i++) {
      if (destacado[i].checked) {
          setSuccess2(destacado);
          a = 1;
          break;
      }
    }
    if (a == 0) {
      setError2(destacado, "Debe ingresar una categoria");
    }

    //featured_desc validation
    if (destacado[0].checked || destacado[1].checked) {
      if (destacado[1].checked && descripcion_destacadaValue === "") {
        setError(descripcion_destacada, "Debe ingresar una descripcion destacada");
      } else if (destacado[1].checked && descripcion_destacadaValue.length < 15 || descripcion_destacadaValue.length > 300) {
        setError(descripcion_destacada, "Debe contener al menos 15 caracteres y no mas de 300");
      } else if (destacado[0].checked && descripcion_destacadaValue !== "") {
        setError(descripcion_destacada, "Debe seleccionar destacado para poder usar una descripcion destacada");
      } else {
        setSuccess(descripcion_destacada);
      }
    }

    //price validation
    if (precioValue === "") {
      setError(precio, "Debe ingresar un precio");
    } else if (precioValue.length > 10) {
      setError(precio, 'El precio debe ser en formato "1234567.00", max 10 caracteres');
    } else if (precioValue <= 0) {
      setError(precio, "El precio no puede ser menor o igual a 0");
    } else {
      setSuccess(precio);
    }

    //discount validation
    if (descuentovalue.length > 5) {
      setError(descuento, 'El descuento debe tener max 5 caracteres');
    } else if (!validator.isDecimal(descuentovalue)) {
      setError(descuento, 'El descuento debe ser formato "90.5"');
    } else if (descuentovalue <= 0 || descuentovalue > 100) {
      setError(descuento, "El descuento no puede ser menor o igual a 0 o mayor a 100");
    } else {
      setSuccess(descuento);
    }

    //rating validation
    if (calificacionValue === "") {
      setError(calificacion, "Debe ingresar una calificacion");
    } else if (calificacionValue.length > 4) {
      setError(calificacion, 'La calificacion debe ser de max 4 caracteres');
    } else if (!validator.isDecimal(calificacionValue)) {
      setError(calificacion, 'La calificacion debe ser formato "4.5"');
    } else if (calificacionValue != 0 && calificacionValue && 0.5 && calificacionValue != 1 && calificacionValue != 1.5 && calificacionValue != 2 && calificacionValue != 2.5 && calificacionValue != 3 && calificacionValue != 3.5 && calificacionValue != 4 && calificacionValue != 4.5 && calificacionValue != 5) {
      setError(calificacion, "La calificacion no puede ser menor a 0 o mayor a 5, y solo puede tener .5 de decimal");
    } else {
      setSuccess(calificacion);
    }

    //os validation
    if (sistemaValue === "") {
      setError(sistema, "Debe ingresar un sistema operativo");
    } else if (sistemaValue.length < 3 || sistemaValue.length > 50) {
      setError(sistema, "Debe contener al menos 3 caracteres y no mas de 50");
    } else if (!validator.isAlpha(sistemaValue)) {
      setError(sistema, "El sistema solo puede contener letras");
    } else {
      setSuccess(sistema);
    }

    //screen validation
    if (pantallaValue === "") {
      setError(pantalla, "Debe ingresar una pantalla");
    } else if (pantallaValue.length < 10 || pantallaValue.length > 80) {
      setError(pantalla, "Debe contener al menos 10 caracteres y no mas de 80");
    } else {
      setSuccess(pantalla);
    }

    //camera validation
    if (camaraValue === "") {
      setError(camara, "Debe ingresar una camara");
    } else if (camaraValue.length < 10 || camaraValue.length > 50) {
      setError(camara, "Debe contener al menos 10 caracteres y no mas de 50");
    } else {
      setSuccess(camara);
    }
  };

    validateInputs();
    
    if (errors != true && errors2 != true) {
      console.log("submit");
      form.submit();
    }
  });
});



  