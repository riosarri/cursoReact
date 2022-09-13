import React, { Component } from 'react'; // importaciones
class ContenidoPaginaPrincipal extends Component { // definimos el componente
    render(): React.ReactElement { // plantilla renderizable
        return (
            <div>
                <h3>Contenido paginal princpipal <br/>Curso de React</h3>
                <p>Desarrollador web</p>
            </div>
        )
    }
}
export default ContenidoPaginaPrincipal; // exportación del componente