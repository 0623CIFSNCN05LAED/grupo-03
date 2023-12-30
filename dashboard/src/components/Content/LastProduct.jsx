import { useEffect, useState } from "react";

export default function LastProduct() {
  const [lastProduct, setLastProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3030/api/products/last");
      const result = await response.json();
      setLastProduct(result.data);
    };
    fetchData();
  }, []);


  return (
    <div className="card">
      <h4 className="title">Último Producto Creado</h4>
      <div>
        <p className="name">Nombre:{lastProduct.name}</p>
        <p className="email">
          Marca: <span className="bold">{lastProduct.brand} </span>
        </p>
        <p className="create_date">
          Fecha de creación:{" "}
          <span className="bold">{lastProduct.created_at} </span>
        </p>
      </div>
    </div>

  )

}