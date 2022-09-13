import React, {Component} from 'react';

interface Cliente {
    nombre?: string;
    direccion?: string;
    dni?: number | string ;
    tlf?: number | string ;
}

class  FichaCliente extends Component<Cliente>{
    static defaultProps = {
        nombre: "Pepe",
        direccion: "Calle Ronda",
        age : 25,
        tlf : "645437722"
    };
    render(): React.ReactElement{
        return (
            <div id="FichaCliente">
                <h2>Datos del Cliente</h2>
                <h3>{this.props.nombre}</h3>
                <h3>{this.props.direccion}</h3>
                <h3>{this.props.dni}</h3>
                <h3>{this.props.tlf}</h3>
            </div>
        )
    }
}

export default FichaCliente;