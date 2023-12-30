import { useEffect, useState } from "react";


export default function LastProduct() {
  const [lastProduct, setLastProduct] = useState({ product: [] });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3030/api/products/last");
      // const resultProduct = await lastProductApi();
      //setLastProduct(response)
      const result = await response.json();
      setLastProduct(result.data);
    };
    fetchData();
  }, []);


  // useEffect(() => {
  //   fetch("http://localhost:3030/api/products/last")
  //     .then(response => response.json())
  //     .then(result => {
  //       setLastProduct({
  //         product: result.data
  //       });

  //     });
  // }, [])

  // console.log("lastProduct", lastProduct);

  return (
    <div className="card">
      <h4 className="title">Último Producto Creado</h4>
      {/* <div className="container-photo">
            <img src= 'http://localhost:3030/images/products/images' alt="photo user" className="photo"/>
        </div> */}
      <div>
        <p className="name">Nombre:{lastProduct.product.name}</p>
        <p className="email">Marca: <span className="bold">{lastProduct.product.brand} </span></p>
        <p className="create_date">Fecha de creacion: <span className="bold">{lastProduct.product.created_at} </span></p>

      </div>
    </div>

  )

}