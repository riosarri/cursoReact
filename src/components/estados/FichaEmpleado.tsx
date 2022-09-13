import React, { Component } from 'react';
interface Empleado {
    codigo: number;
    nombre: string;
}
class FichaEmpleado extends Component<any, Empleado>{
    constructor(props: Empleado) {
        super(props);
        this.state = {
            codigo: 1252,
            nombre: 'Empleado 1252 Juan',
        }
    }
    render(): React.ReactElement {
        return (
            <div id="FichaEmpleado">
                <h2>Estado del componente FichaEmpleado</h2>
                <h3>{this.state.codigo}</h3>
                <h3>{this.state.nombre}</h3>
                <p> Formulario Ficha Empleado</p>
                <form>
                    <label >Codigo</label>
                    <input id="codigo"type="number" min="0" value={this.state.codigo}/><br/>
                    <label>Nombre</label>
                    <input id="nombre" type="text" min="0" value={this.state.nombre}/><br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default FichaEmpleado;