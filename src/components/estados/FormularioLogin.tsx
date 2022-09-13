import React, { Component } from 'react';
interface LoginData {
    usuario: string;
    password: string;
}
class FormularioLogin extends Component<any, LoginData>{
    constructor(props: LoginData) {
        super(props);
        this.state = {
            usuario: 'Pepe',
            password: 'contraseñaPepe'
        }
    }
    render(): React.ReactElement {
        return (
            <div id="FormularioLogin">
                <h2>Estado del componente FormularioLogin</h2>
                <h3>{this.state.usuario}</h3>
                <h3>{this.state.password}</h3>
                <p>Formulario</p>
                <form>
                    <label >Usuario</label>
                    <input id="user" type="text" defaultValue={this.state.usuario} /><br />
                    <label>Password</label>
                    <input id="password" type="password" defaultValue={this.state.password} /><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default FormularioLogin;