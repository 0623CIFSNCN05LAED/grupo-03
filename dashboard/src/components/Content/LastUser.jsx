import { useEffect, useState } from "react";

export default function LastUser() {
  const [lastUser, setLastUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3030/api/users/last");
      const result = await response.json();
      setLastUser(result.data);
    };
    fetchData();
  }, []);


  return (
    <div className="card">
      <h4 className="title">Último Usuario Creado</h4>
      <div>
        {/* <p className="photo">Foto:{lastUser.profile_picture}</p> */}
        <p className="name">Nombre:{lastUser.name}</p>
        <p className="email">
          Apellido: <span className="bold">{lastUser.last_name} </span>
        </p>
        <p className="create_date">
          Fecha de creacion:{" "}
          <span className="bold">{lastUser.created_at} </span>
        </p>
      </div>
    </div>

  )

}





