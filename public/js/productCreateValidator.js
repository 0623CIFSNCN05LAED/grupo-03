window.addEventListener('load', () => {
  const form = document.getElementById("form");
  const nombre = document.getElementById("name");
  const descripcion = document.getElementById("description");
  const descripcion_destacada = document.getElementById("featured_desc");
  const images = document.getElementById("images");
  const precio = document.getElementById("price");
  const descuento = document.getElementById("discount");
  const calificacion = document.getElementById("rating");
  const destacado = document.getElementById("featured");
  const sistema = document.getElementById("os");
  const pantalla = document.getElementById("screen");
  const camara = document.getElementById("camera");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let errors = false;
    
  const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");

    console.log(errors);
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
    const descripcionValue = descripcion.value.trim();
    const descripcion_destacadaValue = descripcion_destacada.value.trim();
    const imagesValue = images.value.trim();
    const precioValue = precio.value.trim();
    const descuentovalue = descuento.value.trim();
    const calificacionValue = calificacion.value.trim();
    const destacadoValue = destacado.value.trim();
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

    //featured_desc validation
    if (destacadoValue === '1') {
      if (descripcion_destacadaValue === "") {
        setError(descripcion_destacada, "Debe ingresar una descripcion destacada");
      } else if (descripcion_destacadaValue.length < 15 || descripcion_destacadaValue.length > 300) {
        setError(descripcion_destacada, "Debe contener al menos 15 caracteres y no mas de 300");
      } else {
        setSuccess(descripcion_destacada);
      }
    }

    //featured validation
    if (destacadoValue === "") {
      setError(destacado, "Debe ingresar una categoria");
    } else if (destacadoValue === '0' && descripcion_destacadaValue !== "") {
      setError(descripcion_destacada, "Debe ingresar una categoria para poder usar una descripcion destacada");
    } else {
      setSuccess(destacado);
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

    //images validation
    /*
    if (!validator.isEmpty(imagesValue)) {
      setError(images, 'Debe ingresar una imágen');
    } else {
      setSuccess(images);
    }*/
    images.addEventListener("change", (e) => {
      console.log(e.target.files[0]);
      let archivo = e.target.files[0];
      if (archivo) {
        if (archivo.name.includes(".png") || archivo.name.includes(".jpg")) {
          setSuccess(images);
        } else {
          setError(images, "La imagen debe ser .png o .jpg");
        }
      } else {
        setError(images, "Debe subir una imagen de perfil");
      }
    })

    //rating validation
    if (calificacionValue === "") {
      setError(calificacion, "Debe ingresar una calificacion");
    } else if (calificacionValue.length > 3) {
      setError(calificacion, 'La calificacion debe ser de max 3 caracteres');
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
    
    if (errors != true) {
      console.log("submit");
      form.submit();
    }
  });
});



  