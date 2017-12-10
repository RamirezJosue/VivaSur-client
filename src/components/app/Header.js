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
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }


  render() {
    return (
      
        <header className="encabezado  navbar fixed-top ">
          <div className="container">
            <a className="logo">
              <img src="" alt="Logo del sitio" />
            </a>

            <button type="button" className="boton-menu" onClick={this.toggle}>
              <i class="fa fa-bars" aria-hidden="true"></i>
            </button>

            <Collapse id="menu-principal" isOpen={this.state.collapse} >
              <ul>
                <li className="active"><Link to="/home">Inicio</Link></li>
                <li><Link to="/login">login</Link></li>
                <li><Link to='/catalogo/habitacion/list'>Habitaciones</Link></li>
              </ul>

            </Collapse>

          </div>
        </header>
     
    );
  }
}
export default (Header)
