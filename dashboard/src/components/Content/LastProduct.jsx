import { useEffect, useState } from "react";
import { lastProductApi } from "../../api/searchApi";

export default function LastProduct() {
  const [lastProduct, setLastProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3030/api/products/last");
      const resultProduct = await lastProductApi();
      setLastProduct(resultProduct)
      // const result = await response.json();
      // setLastProduct(result.data);
    };
    fetchData();

  }, []);

  console.log("lastProduct", lastProduct);

  return (
    <div className="card">
        <h2 className="title">Ultimo Producto</h2>
        {/* <div className="container-photo">
            <img src= 'http://localhost:3030/images/products/images' alt="photo user" className="photo"/>
        </div> */}
        <div>
            <h3 className="name">{name}</h3>
            <h5 className="id">{id} </h5>
            <p className="email">Marca: <span className="bold">{brand} </span></p>
            <p className="create_date">Fecha de creacion: <span className="bold">{created_at} </span></p>
            
        </div>
    </div>

)
  
  // const formatNumber = (number) => {
  //   return new Intl.NumberFormat("es-ES", {
  //     minimumFractionDigits: 2,
  //     maximumFractionDigits: 2,
  //   }).format(number);
  // };

  // return (
  //   <div className="container mt-4">
  //     <h2>Último Producto Creado</h2>

  //     {lastProduct && (
  //       <div className="card">
  //         <img
  //           src={lastProduct.urlImage}
  //           className="card-img-top"
  //           alt={`imagen de ${lastProduct.name}`}
  //           style={{ width: "250px", height: "auto" }}
  //         />

  //         <div className="card-body">
  //           <h4 className="card-title">{lastProduct.name}</h4>
  //           <p className="card-text">{lastProduct.description}</p>

  //           <ul className="list-group list-group-flush">
  //             <li className="list-group-item">
  //               <strong>Precio:</strong> ${formatNumber(lastProduct.price)}
  //             </li>
  //             <li className="list-group-item">
  //               <strong>Marca:</strong> {lastProduct.others[0].brand}
  //             </li>
  //             <li className="list-group-item">
  //               <strong>Categoría:</strong> {lastProduct.others[1].category}
  //             </li>
  //           </ul>
  //         </div>

  //         <div className="card-footer">
  //           <small className="text-muted">ID: {lastProduct.id}</small>
  //         </div>
  //       </div>
  //     )}
  //   </div>
  // );
}