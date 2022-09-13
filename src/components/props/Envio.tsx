import React, { Component } from 'react';

interface DatosEnvio {
    nombre_cliente?: string;
    direccion_envio?: string;
    fecha_de_envio?: Date;
    fecha_llegada_prevista?: Date | string;
}

class Envio extends Component<DatosEnvio>{
    static defaultProps = {
        nombre_cliente: "Pepe",
        direccion_envio: "Calle Ronda",
        fecha_de_envio: new Date(),
        fecha_llegada_prevista: new Date()
    };
    render(): React.ReactElement {
        return (
            <div id="Envio">
                <h2>Datos del envio</h2>
                <h3>{this.props.nombre_cliente}</h3>
                <h3>{this.props.direccion_envio}</h3>
                <h3>{this.props.fecha_de_envio?.toString()}</h3>
                <h3>{this.props.fecha_llegada_prevista?.toString()}</h3>
            </div>
        )
    }
}

export default Envio;