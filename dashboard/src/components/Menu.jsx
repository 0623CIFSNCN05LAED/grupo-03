import logoProyecto from "../assets/img/logo-proyecto.svg"
import Sidebar from "./Sidebar";

export default function Menu() {
  return (
    <header className="menu-wrap">
      <figure className="user">
        <div className="user-avatar">
          <img src={logoProyecto} alt="Logo Digital Phone	" />
        </div>
        <figcaption>Digital Phone</figcaption>
      </figure>
      <Sidebar />
    </header>
  );
}