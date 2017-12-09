import React, { Component } from 'react'


import {
  Link,
} from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';


class Header extends Component {
  render() {
    return (
      <header className="encabezado  navbar fixed-top ">
        <div className="container">
          <a className="logo">
            <img src="" alt="Logo del sitio" />
          </a>
          <button type="button" className="boton-buscar">
            <i class="fa fa-search" aria-hidden="true"></i>
          </button>
          <button type="button" className="boton-menu">
            <i class="fa fa-bars" aria-hidden="true"></i>
          </button>
          <form id="bloque-buscar">
            <div className="contenedor-bloque-buscar">
              <input type="text" placeholder="Buscar..." />
              <input type="submit" value="Buscar" />
            </div>
          </form>
          <nav id="menu-principal"  >
            <ul>
              <li className="active"><Link to="/home">Inicio</Link></li>
              <li><Link to="/login">login</Link></li>
              <li><Link to='/catalogo/habitacion/list'>Habitaciones</Link></li>
            </ul>

          </nav>
        </div>
      </header>
    );
  }
}
export default (Header)
