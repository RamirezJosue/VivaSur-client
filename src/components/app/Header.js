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
      <section className="bienvenidos">

        <header className="encabezado  navbar fixed-top ">
          <div className="container">
            <a className="logo">
              <img src="" alt="Logo del sitio" />
            </a>

            <button type="button" className="boton-menu d-md-none" onClick={this.toggle}>
              <i class="fa fa-bars" aria-hidden="true"></i>
            </button>

            <Collapse id="menu-principal" isOpen={this.state.collapse} >
              <ul>
                <li className="active"><Link to="/home">Inicio</Link></li>
                <li><Link to="/login">Nosotros</Link></li>
                <li><Link to='/catalogo/habitacion/list'>Servicios</Link></li>
                <li><Link to='/paginacion'>Contacto</Link></li>
              </ul>

            </Collapse>

          </div>
        </header>
        <div className="texto-encabezado text-center" >
          <div className="container">
            <h1 className="display-4">VivaSur constuyendo tus Sueños</h1>
            <p> Brindamos segun las necesidades y requirimientos de nuestros clientes.</p>
            <Link to="#" className=" btn btn-primary btn-lg" > Ponte en contacto </Link>
          </div>
        </div>
        <div className="flecha-bajar text-center">
          <Link to="#"> <i class="fa fa-angle-down" aria-hidden="true"></i></Link>
        </div>
      </section>

    );
  }
}
export default (Header)
