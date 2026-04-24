import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Cookies from "universal-cookie";

const cookies = new Cookies();
function Navbar() {
  const isLogged = cookies.get("isLogged");
  return (
    <nav>
      <ul className="nav nav-tabs my-4">
        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/peliculas">Películas</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/series">Series</Link></li>
      
      {isLogged ? (
        <React.Fragment>
        <li className="nav-item"><Link className="nav-link" to="/Favoritas">Favoritas</Link></li>
        <li className="nav-item ml-auto"><button className="nav-link" onClick={() => cookies.remove("isLogged", { path: "/" })}>Cerrar sesión</button></li>
        </React.Fragment>
      ) : (
        <React.Fragment>
        <li className="nav-item ml-auto"><Link className="nav-link" to="/login">Login</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/registro">Registro</Link></li>
        </React.Fragment>
      )}
      
    </ul>
  </nav>
);
}
export default Navbar;