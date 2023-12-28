import { useEffect, useState } from "react";

export default function LastUser (){

}

// export default function UltimoUsuario() {
//   const [ultimoUsuario, setUltimoUsuario] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch("http://localhost:3030/api/users/ultimo");
//       const result = await response.json();
//       setUltimoUsuario(result.data);
//     };
//     fetchData();
//   }, []);
//   console.log("ultimoUsuario ", ultimoUsuario);

//   return (
//     <div className="container mt-4">
//       <h2>Último Usuario Creado</h2>

//       {ultimoUsuario && (
//         <div className="card">
//           <img
//             src={ultimoUsuario.urlImage}
//             className="card-img-top"
//             alt={`imagen de ${ultimoUsuario.name}`}
//             style={{ width: "200px", height: "auto" }}
//           />

//           <div className="card-body">
//             <h4 className="card-title">
//               {ultimoUsuario.name} {ultimoUsuario.last_name}
//             </h4>

//             <ul className="list-group list-group-flush">
//               <li className="list-group-item">
//                 <strong>Nombre:</strong> {ultimoUsuario.name}
//               </li>
//               <li className="list-group-item">
//                 <strong>Apellido:</strong> {ultimoUsuario.last_name}
//               </li>
//               <li className="list-group-item">
//                 <strong>Correo Electrónico:</strong> {ultimoUsuario.email}
//               </li>
//             </ul>
//           </div>

//           <div className="card-footer">
//             <small className="text-muted">ID: {lastUser.id_user}</small>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }