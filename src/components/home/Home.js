import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom'

import { Container, Row, Col } from 'reactstrap';

//
import '../css/style.css';
import '../images/font-awesome/css/font-awesome.min.css'
import '../images/hotel.jpg'

class Home extends Component {

    render() {
        return (
            <section className="agencia" id="agencia">
                <Container>
                    <h2 className="h3 text-center font-weight-bold"> Agencia de programacion de aplicaciones</h2>
                    <Row>
                        <Col xs="12" md="8" xl="9">
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

        );
    }
}

export default Home;
