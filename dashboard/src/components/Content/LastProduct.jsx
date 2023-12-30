import { useEffect, useState } from "react";
import { lastProductApi } from "../../api/searchApi";

export default function LastProduct() {
  const [lastProduct, setLastProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3030/api/products?options=last");
      // const resultProduct = await lastProductApi();
      setLastProduct(response)
      // const result = await response.json();
      // setLastProduct(result.data);
    };
    fetchData();

  }, []);

  console.log("lastProduct", lastProduct);

  return (
    <div className="card">
        <h4 className="title">Último Producto Creado</h4>
        {/* <div className="container-photo">
            <img src= 'http://localhost:3030/images/products/images' alt="photo user" className="photo"/>
        </div> */}
        <div>
            <p className="name">Nombre:{lastProduct.name}</p>
            <p className="id">Id:{lastProduct.id_product} </p>
            <p className="email">Marca: <span className="bold">{lastProduct.brand} </span></p>
            <p className="create_date">Fecha de creacion: <span className="bold">{lastProduct.created_at} </span></p>
            
        </div>
    </div>

)
  
}