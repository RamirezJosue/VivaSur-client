import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom'

import { Container, Row, Col } from 'reactstrap';

//


class List extends Component {

    render() {
        return (
            <section className="tu-mejor-eleccion">
                <div className="container">
                    <h2 className="h3 text-center font-weight-bold">¿Porque somos <span>tu mejor eleccion? </span> </h2>
                    <p className="text-center   ">
                        Desarrollo web y Apps para empresas y profesionales
                     </p>
                    <div className="row">
                        <ul className="col-6">
                            <li>
                                <i className="fa fa-briefcase" aria-hidden="true" />
                                <div className="contenedor-eleccion">
                                    <h4>Aplicaciones para la nube</h4>
                                    <p className="d-none d-sm-block">Para empresa que requiere ampliar sus plataformas de gestión</p>
                                </div>
                            </li>
                            <li>
                                <i className="fa fa-bullhorn" aria-hidden="true" />
                                <div className="contenedor-eleccion">
                                    <h4>Fábrica de software</h4>
                                    <p className="hidden-sm-down">Servicios de mejora correctiva y evolutiva para sus aplicasiones</p>
                                </div>
                            </li>
                            <li>
                                <i className="fa fa-comment-o" aria-hidden="true" />
                                <div className="contenedor-eleccion">
                                    <h4>Gestión en la nube</h4>
                                    <p className="hidden-sm-down">Para empresa que requiere ampliar sus plataformas de gestión </p>
                                </div>
                            </li>
                        </ul>
                       
                        <ul className="col-6">
                            <li>
                                <i className="fa fa-calendar" aria-hidden="true" />
                                <div className="contenedor-eleccion">
                                    <h4>Videojuegos</h4>
                                    <p className="hidden-sm-down">Para empresa que requiere ampliar sus plataformas para su gestión </p>
                                </div>
                            </li>
                            <li>
                                <i className="fa fa-check-square-o" aria-hidden="true" />
                                <div className="contenedor-eleccion">
                                    <h4>Diseño persoalizado</h4>
                                    <p className="hidden-sm-down">Customiza hasta el ultimo pixel de tu App. Infinitas Posibilidades </p>
                                </div>
                            </li>
                            <li>
                                <i className="fa fa-cogs" aria-hidden="true" />
                                <div className="contenedor-eleccion">
                                    <h4>Funciones a medida</h4>
                                    <p>Tiene mas de 50 funcioens predesarrolladas para escoger. </p>
                                </div>
                            </li>
                        </ul>
                        <div>
                            <img src="" alt="Mundo movil"/>
                        </div>
                    </div>
                </div>

            </section>

        );
    }
}

export default List;
