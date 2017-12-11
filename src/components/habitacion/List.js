import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom'

import { Container, Row, Col } from 'reactstrap';

//


class List extends Component {

    render() {
        return (
            <div action="">


                Nombre de usuario: <input type="text" name="usuario" placeholder="Tu nombre aqui" />
                <br />
                Email: <input type="text" name="email" placeholder="Tu email aqui" />
                <br />
                Clave: <input type="text" name="clave" placeholder="Tu contrasenia aqui" />
                <br />
                Escribe tu comentario
      <textarea name="comentarios" placeholder="Escriba tu comentario aqui" rows="8" cols="80"></textarea>
            </div>


        );
    }
}

export default List;
