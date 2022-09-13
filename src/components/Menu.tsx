import React, { Component } from 'react'; // importaciones
class Menu extends Component { // definimos el componente
    render(): React.ReactElement { // plantilla renderizable
        return (
            <nav>
                <ul id='menu'>
                    <li><a href='http://localhost:3000/'>Home</a></li>
                    <li><a href='http://localhost:3000/'>Productos</a></li>
                    <li><a href='http://localhost:3000/'>Contacto</a></li>
                </ul>
            </nav>
        )
    }
}
export default Menu; // exportación del componente