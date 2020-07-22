import React from 'react';
import {NavLink} from 'react-router-dom';

import './Navbar.scss'

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__section">
        <div className="navbar-brand">
          <NavLink className="nav-link" to="/">
            Vivetix|MX
          </NavLink>
        </div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" exact>
                Main
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/ayuda">
                Ayuda
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contacto">
                Contacto
              </NavLink>
            </li>
          </ul>
        </div>
  </nav>
  )
};
