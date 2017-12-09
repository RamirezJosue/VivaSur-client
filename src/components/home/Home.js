import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom'

//
import '../css/style.css';
import '../images/font-awesome/css/font-awesome.min.css'

class Home extends Component {

    render() {
        return (
            <div>
                <div className="texto-encabezado text-center" >
                    <div className="container">
                        <h1 className="display-4">Diseno de APPS para empresas</h1>
                        <p> Creamos aplicaciones  segun las necesidadesy requirimientos de nuestros clientes.</p>
                        <Link to="#" className=" btn btn-primary btn-lg" > Ponte en contacto </Link>
                    </div>
                </div>
                <div className="flecha-bajar">
                    <Link to="">Boton bajar</Link>
                </div>
            </div>


        );
    }
}

export default Home;
