window.onload = () => {
    const app = document.getElementById("root");
    const container = document.createElement("div");
    container.setAttribute("class", "container");
    app.appendChild(container);
  
    // Aqui debemos agregar nuestro fetch
  
  fetch("http://localhost:3030/api/products", {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log("json", json);
      const product = json.data;
  
      /** Codigo que debemos usar para mostrar los datos en el frontend
      let data = product.data;**/
  
      products.forEach((product) => {
        const card = document.createElement("div");
        card.setAttribute("class", "card");
  
        const h1 = document.createElement("h1");
        h1.textContent = product.name;
  
        const p = document.createElement("p");
        p.textContent = `Description: ${product.description}`;
  
        const precio = document.createElement("p");
        precio.textContent = `Price: ${product.price}`;
  
        container.appendChild(card);
        card.appendChild(h1);
        card.appendChild(p);
        if (product !== null) {
          const product = document.createElement("p");
          product.textContent = `Producto: ${product.name}`;
          card.appendChild(product);
        }
        card.appendChild(precio);
      });
    });
  };