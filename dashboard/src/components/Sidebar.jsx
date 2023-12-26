import { Link } from "react-router-dom";

export default function Sidebar() {
  const iconStyle = {
    fontSize: "1.5rem",
    color: "cornflowerblue",
  };

  return (
    <nav>
      <section className="dicover">
        <h3>Opciones</h3>
        <ul>
          <li>
            <Link to="/search">
              <i className="bi bi-search" style={iconStyle}></i>- Buscar
            </Link>
          </li>
          <li>
            <Link to="/estadisticas">
              <i className="bi bi-graph-up"></i>- Estadísticas
            </Link>
          </li>
          <li>
            <Link to="/ultimo-producto">
              <i className="bi bi-star" style={iconStyle}></i>- Último Producto
            </Link>
          </li>
          <li>
            <Link to="/ultimo-usuario">
              <i className="bi bi-person-up" style={iconStyle}></i>- Último Usuario
            </Link>
          </li>
          <li>
            <Link to="/marcas">
              <i className="bi bi-tags" style={iconStyle}></i>- Marcas
            </Link>
          </li>
          <li>
            <Link to="/products">
              <i className="bi bi-laptop" style={iconStyle}></i>- Productos
            </Link>
          </li>
        </ul>
      </section>
    </nav>
  );
}
