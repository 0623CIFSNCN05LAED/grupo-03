import { useEffect, useState } from "react";

export default function LastUser() {
  const [lastUser, setLastUser] = useState({ user: [] });

  useEffect(() => {
    fetch("http://localhost:3030/api/users/last")
      .then(response => response.json())
      .then(result => {
        setLastUser({
          user: result.data
        });

      });
  }, [])

  // console.log("last User ", lastUser);

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

        <p className="name">Nombre:{lastUser.user.name}</p>
        <p className="last_name">Apellido:{lastUser.user.last_name}</p>
        <p className="email">Email:{lastUser.user.email}</p>
        <p className="create_date">Fecha de creacion: <span className="bold">{lastUser.user.created_at} </span></p>



      </div>
    </div>

  )

}

