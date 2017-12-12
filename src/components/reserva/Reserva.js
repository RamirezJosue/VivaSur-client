import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom'

import { Container, Row, Col } from 'reactstrap';

//
import inmo from '../images/inmo.jpg'

import Collapsible from 'react-collapsible';


class Reserva extends Component {

    render() {
        return (
            <body className="paginas-internas">
                <section className="ruta p-1 ">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-right">
                                <Link to="/">Inicio</Link> » Nosotros
                        </div>
                        </div>
                    </div>
                </section>
                <main>
                    <div className="container">
                        <div className="row">
                            <article className="col-12 col-md-8">
                                <h2>Trabajamos para tu éxito</h2>
                                <p>
                                    Vivasur apuesta la simplicidad, la actualidady la originalidad. Creeos que la innovacion creativa
                                    es la única via para promover y fomentar contenidos de calidad que fortalezcan la confianza de los
                                    usuarios en los posibilidades y nuvos usos de los productos digitales.
                                </p>
                                <p>
                                    Nuestro objetivo es conseguir que clientes y usuarios se sientan conectados en el nuevo mundo de la
                                    informacion con servicios y contenidos que no dificulten su relacion, sino que la simplifique y la
                                    conviertan en un hecho cotidiano, agradable y satisfactorio.
                                </p>
                                <div className="collapsible">
                                <Collapsible trigger="MISIÓN" >
                                    <p>This is the collapsible content. It can be any element or React component you like.</p>
                                    <p>It can even be another Collapsible component. Check out the next section!</p>
                                </Collapsible>
                           

                                <Collapsible trigger="VISIÓN">
                                    <p>This is the collapsible content. It can be any element or React component you like.</p>
                                    <p>It can even be another Collapsible component. Check out the next section!</p>
                                </Collapsible>
                               
                                <Collapsible trigger="VALORES">
                                    <p>This is the collapsible content. It can be any element or React component you like.</p>
                                    <p>It can even be another Collapsible component. Check out the next section!</p>
                                </Collapsible>
                                
                                </div>

                            </article>
                            <aside className="col-12 col-md-4">
                                <img src="" alt="Nosotros" />
                            </aside>
                        </div>
                    </div>
                </main>
            </body>

        );
    }
}

export default Reserva;
