import { useEffect, useState } from "react";

export default function LastUser() {
  const [lastUser, setLastUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3030/api/users/last");
      const result = await response.json();
      setLastUser(result.lastUser);
    };
    fetchData();
  }, []);
  console.log("last User ", lastUser);

  return (
    <div className="container mt-4">
      <h2>Último Usuario Creado</h2>

      {lastUser && (
        <div className="card">
          <img
            src={lastUser.urlImage}
            className="card-img-top"
            alt={`imagen de ${lastUser.name}`}
            style={{ width: "200px", height: "auto" }}
          />

          <div className="card-body">
            <h4 className="card-title">
              {lastUser.name} {lastUser.name}
            </h4>

            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>Nombre:</strong> {lastUser.name}
              </li>
              <li className="list-group-item">
                <strong>Apellido:</strong> {lastUser.last_name}
              </li>
              <li className="list-group-item">
                <strong>Correo Electrónico:</strong> {lastUser.email}
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