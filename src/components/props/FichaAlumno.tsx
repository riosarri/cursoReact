import React, { Component } from 'react';

interface Alumno {
    nombre?: string;
    carrera?: string;
    asignaturas?: number | string;
}

class FichaAlumno extends Component<Alumno>{
    static defaultProps = {
        nombre: "Juan",
        carrera: "Ing.Informatica",
        asignaturas: 12
    };
    render(): React.ReactElement {
        return (
            <div id="FichaCliente">
                <h2>Ficha del Alumno</h2>
                <h3>{this.props.nombre}</h3>
                <h3>{this.props.carrera}</h3>
                <h3>{this.props.asignaturas}</h3>
            </div>
        )
    }
}

export default FichaAlumno;