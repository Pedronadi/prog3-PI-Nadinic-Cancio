import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import cookies from "universal-cookie";

const Navbar = () => (
  <nav>
    <ul className="nav nav-tabs my-4">
      <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/peliculas">Películas</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/series">Series</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/Favoritas">Favoritas</Link></li>
      <li className="nav-item ml-auto"><Link className="nav-link" to="/registro">Registro</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
    </ul>
  </nav>
);

export default Navbar;