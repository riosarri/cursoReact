import React, { Component } from 'react'; // importaciones
import { Link } from 'react-router-dom';
class Menu extends Component { // definimos el componente
    render(): React.ReactElement { // plantilla renderizable
        return (
            <nav>
                <ul id='menu'>
                    <nav
                        style={{
                            borderBottom: "solid 1px",
                            paddingBottom: "1rem",
                        }}
                    >
                        <Link to="/">Inicio</Link>|{" "}
                        <Link to="/about">About</Link> |{" "}
                        <Link to="/navega">Navega</Link> |{" "}
                        <Link to="/listado">Listado</Link> |{" "}
                        <Link to="/coches">Coches</Link> |{" "}
                        <Link to="/clientes">Clientes</Link> |{" "}
                        <Link to="/httprequest">HttpRequest</Link> |{" "}
                        <Link to="/redux">Redux</Link> |{" "}
                    </nav>
                </ul>
            </nav>
        )
    }
}
export default Menu; // exportación del componente