import React, { Component } from 'react'; // importaciones
class PiePagina extends Component { // definimos el componente
    render(): React.ReactElement { // plantilla renderizable
        return (<><footer><p>Footer .. Curso de React...</p>

            <address>

                Rafa Rios<br/>

                    jhonnydoe5468@mypc.com

                </address>

            <ul id="menu">

                <li><a href="/">Home</a></li>

                <li><a href="/productos">Productos</a></li>

                <li><a href="/contactos">Contactos</a></li>

            </ul>

        </footer></>
        )
    }
}
export default PiePagina; // exportación del componente