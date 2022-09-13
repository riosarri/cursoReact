import React, { Component } from 'react'; // importaciones
import EstadoComponente from './estados/EstadoComponente';
import PropiedadesComponente from './props/PropiedadesComponente';
class MiComponente extends Component { // definimos el componente
    render(): React.ReactElement { // plantilla renderizable
        return (
            <div id="MiComponente">
                <h2>Mi Componente</h2>
                <PropiedadesComponente name="pepe" age="12" email="p@p.com" />
                <EstadoComponente />

            </div>)
    }
}
export default MiComponente; // exportación del componente