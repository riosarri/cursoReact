import React, {Component} from 'react';
import {Cliente} from './Cliente';
import {AddClienteForm} from './AddCliente';

interface Estado {
    clienteForm: Cliente;
    listadoClientes: Cliente[];
}

class ClientesComponente extends Component<{},Estado>{
    
    state = {
      clienteForm:{
          id: 1,
          nombre: "",
          direccion: "",
          tlf: ""
      } ,
      listadoClientes: []
    };
    render(): React.ReactElement{
        return (
            <div id="ClientesContenedor">
                <h2>ClientesContenedor</h2>
                <AddClienteForm cliente={this.state.clienteForm} onChange={this.handleTaskChange}  onAdd={this.addClient}/>
                <ul>
                    {this.state.listadoClientes.map((cliente: Cliente) => (
                        <li key={cliente.id}> Nombre:  {cliente.nombre}, Direccion: {cliente.direccion}, Telefono: {cliente.tlf}</li>
                    ))}
                </ul>
            </div>
        )
    }
    private addClient = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        this.setState(previousState => ({
            clienteForm: {
                id: previousState.clienteForm.id + 1,
                nombre: "",
                direccion: "",
                tlf: ""
            },
            listadoClientes: [...previousState.listadoClientes, previousState.clienteForm]
        }));
    };

    private handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const NOMBRE = 'nombre';
        const DIRECCION = 'dir';
        const TELEFONO = 'tlf';
        if (event.target.id === NOMBRE){
            this.setState({
                clienteForm: {
                    ...this.state.clienteForm,
                    nombre: event.target.value
                }
            });
        }
        if (event.target.id === DIRECCION){
            this.setState({
                clienteForm: {
                    ...this.state.clienteForm,
                    direccion: event.target.value
                }
            });
        }
        if (event.target.id === TELEFONO){
            this.setState({
                clienteForm: {
                    ...this.state.clienteForm,
                    tlf: event.target.value
                }
            });
        }
    };

}

export default ClientesComponente;