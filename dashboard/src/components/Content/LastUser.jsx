import { useEffect, useState } from "react";

export default function LastUser() {
  const [lastUser, setLastUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3030/api/users?options=last");

      setLastUser(response);
    };
    fetchData();
  }, []);

  console.log("last User ", lastUser);

  return (
    <div className="card">
      <h4 className="title">Último Usuario Creado</h4>

      <div>
        {/* <img
          src={lastUser.urlImage}
          className="card-img-top"
          alt={`imagen de ${lastUser.name}`}
          style={{ width: "200px", height: "auto" }}
        /> */}

        <p className="name">Nombre:{lastUser.name}</p>
        <p className="last_name">Apellido:{lastUser.last_name}</p>
        <p className="email">Email:{lastUser.email}</p>
        <p className="create_date">Fecha de creacion: <span className="bold">{LastUser.created_at} </span></p>



      </div>

      {/* {lastUser && (
        <div className="card">
          <img
            src={lastUser.urlImage}
            className="card-img-top"
            alt={`imagen de ${lastUser.name}`}
            style={{ width: "200px", height: "auto" }}
          />

          <div className="card-body">
            <p className="card-title">
              {lastUser.name} {lastUser.name}
            </p>

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
      )} */}
    </div>
  );
}