import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom'

import { Container, Row, Col } from 'reactstrap';

//
    

class Home extends Component {

    render() {
        return (
            <body>
            <section className="agencia py-2" id="agencia">
                <Container>
                    <Row>
                        <Col xs="12" md="8" xl="9">
                            <h2 className="h3 text-center font-weight-bold text-md-left" > Agencia de programacion de aplicaciones</h2>
                            <p> NETWORK te asesora en el desarrollo y el diseño para que tu aplicacion movil salga a al Luz.
                            Ponemosa tu disposicion la mejores plataformas del mundo  de las telcomuniaciones.</p>
                            <p>Ponemos a tu alcance un servicio adaptado a tus necesidades, desde una consultoria  integral
                            con supervision de todos y cada uno de los  pasos que has de seguir  para crear un negocio actual
                            (comunicacion, desino coperativo, tecnologias...)a productos adaptacion a metodologias agiles de creacion
                            de apps disenador por nosotros y avaladas por nuestros anios de experencia.</p>
                        </Col>
                        <Col xs="12" md="4" xl="3">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Jousten_Hotel.JPG/200px-Jousten_Hotel.JPG" alt="La agencia" />
                        </Col>

                    </Row>
                </Container>

            </section>
            <section className="tu-mejor-eleccion p-y-1">
            <div className="container">
                <h2 className="h3 text-center font-weight-bold">¿Porque somos <span>tu mejor eleccion? </span> </h2>
                <p className="text-center   ">
                    Desarrollo web y Apps para empresas y profesionales
                 </p>
                <div className="row">
                    <ul className="col-6 col-lg-4 text-center text-lg-left">
                        <li>
                            <i className="fa fa-briefcase" aria-hidden="true" />
                            <div className="contenedor-eleccion">
                                <h4>Aplicaciones para la nube</h4>
                                <p className="d-none d-md-block">Para empresa que requiere ampliar sus plataformas de gestión</p>
                            </div>
                        </li>
                        <li >
                            <i className="fa fa-bullhorn" aria-hidden="true" />
                            <div className="contenedor-eleccion">
                                <h4>Fábrica de software</h4>
                                <p className="d-none d-md-block">Servicios de mejora correctiva y evolutiva para sus aplicasiones</p>
                            </div>
                        </li>
                        <li>
                            <i className="fa fa-comment-o" aria-hidden="true" />
                            <div className="contenedor-eleccion">
                                <h4>Gestión en la nube</h4>
                                <p className="d-none d-md-block">Para empresa que requiere ampliar sus plataformas de gestión </p>
                            </div>
                        </li>
                    </ul>
                    <div className="d-none d-md-block col-lg-4">
                        <img src="https://comprarchinobien.com/wp-content/uploads/2016/07/huawei-p9-moviles-chinos-gama-alta.jpg" className="d-none d-sm-block col-lg-4" alt="Mundo movil"/>
                    </div>
                    <ul className="col-6 col-lg-4 text-center text-lg-right ">
                        <li>
                            <i className="fa fa-calendar" aria-hidden="true" />
                            <div className="contenedor-eleccion">
                                <h4>Videojuegos</h4>
                                <p className="d-none d-md-block">Para empresa que requiere ampliar sus plataformas para su gestión </p>
                            </div>
                        </li>
                        <li >
                            <i className="fa fa-check-square-o" aria-hidden="true" />
                            <div className="contenedor-eleccion">
                                <h4>Diseño persoalizado</h4>
                                <p className="d-none d-md-block">Customiza hasta el ultimo pixel de tu App. Infinitas Posibilidades </p>
                            </div>
                        </li>
                        <li >
                            <i className="fa fa-cogs" aria-hidden="true" />
                            <div className="contenedor-eleccion">
                                <h4>Funciones a medida</h4>
                                <p className="d-none d-md-block">Tiene mas de 50 funcioens predesarrolladas para escoger. </p>
                            </div>
                        </li>
                    </ul>
                    
                </div>
            </div>

        </section>
        </body>

        );
    }
}

export default Home;
