import React, { Component } from 'react'; // importaciones
import logo from '../logo.svg';
class Cabecera extends Component { // definimos el componente
    render(): React.ReactElement { // plantilla renderizable
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h3>
                    Curso React
                </h3>
            </header>
        )
    }
}
export default Cabecera; // exportación del componente