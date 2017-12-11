import React, { Component } from 'react'

import {
    Link,
} from 'react-router-dom'

class Footer extends Component {
    render() {
        return (
            <footer className="piedepagina p-1" role="contentinfo">
                <div className="container">
                    <p>Todos los derechos reservados © 2017 </p>
                    <ul className="redes-sociales">
                        <li><a href="https://www.facebook.com/vivasurinmobiliaria/"> <i class="fa fa-facebook" aria-hidden="true"/></a></li>
                        <li><a href="https://www.youtube.com/watch?v=MwQu6mJXCTo"><i class="fa fa-twitter" aria-hidden="true"/></a></li>
                        <li><a href=""><i class="fa fa-youtube" aria-hidden="true"/></a></li>
                    </ul>
                </div>
            </footer>
        )
    }
}
export default (Footer)