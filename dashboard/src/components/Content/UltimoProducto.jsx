import { useEffect, useState } from "react";

export default function UltimoProducto() {
    const [ultimoProducto, setUltimoProducto] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:3030/api/products/ultimo");
            const result = await response.json();
            setUltimoProducto(result.data);
        };
        fetchData();
    }, []);
    console.log("ultimo Producto ", ultimoProducto);

    return (
        <div className="container mt-4">
            <h2>Último Producto Creado</h2>

            {ultimoProducto && (
                <div className="card">
                    <img
                        src={ultimoProducto.urlImage}
                        className="card-img-top"
                        alt={`imagen de ${ultimoProducto.name}`}
                        style={{ width: "400px", height: "auto" }}
                    />

                    <div className="card-body">
                        <h4 className="card-title">{ultimoProducto.name}</h4>
                        <p className="card-text">{ultimoProducto.description}</p>

                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <strong>Precio:</strong> ${ultimoProducto.price}
                            </li>
                            <li className="list-group-item">
                                <strong>Marca:</strong> {ultimoProducto.others[0].brand}
                            </li>
                        </ul>
                    </div>

                    <div className="card-footer">
                        <small className="text-muted">ID: {ultimoProducto.id}</small>
                    </div>
                </div>
            )}
        </div>
    );
}