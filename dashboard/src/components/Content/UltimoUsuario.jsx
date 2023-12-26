import { useEffect, useState } from "react";

export default function UltimoUsuario() {
  const [ultimoUsuario, UltimoUsuario] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3030/api/users/ultimo");
      const result = await response.json();
      setUltimoUsuario(result.ultimoUsuario);
    };
    fetchData();
  }, []);
  console.log("ultimo Usuario ", ultimoUsuario);

  return (
    <div className="container mt-4">
      <h2>Último Usuario Creado</h2>

      {ultimoUsuario && (
        <div className="card">
          <img
            src={ultimoUsuario.urlImage}
            className="card-img-top"
            alt={`imagen de ${ultimoUsuario.name}`}
            style={{ width: "200px", height: "auto" }}
          />

          <div className="card-body">
            <h4 className="card-title">
              {ultimoUsuario.name} {ultimoUsuario.last_name}
            </h4>

            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>Nombre:</strong> {ultimoUsuario.name}
              </li>
              <li className="list-group-item">
                <strong>Apellido:</strong> {ultimoUsuario.last_name}
              </li>
              <li className="list-group-item">
                <strong>Correo Electrónico:</strong> {ultimoUsuario.email}
              </li>
            </ul>
          </div>

          <div className="card-footer">
            <small className="text-muted">ID: {lastUser.id}</small>
          </div>
        </div>
      )}
    </div>
  );
}