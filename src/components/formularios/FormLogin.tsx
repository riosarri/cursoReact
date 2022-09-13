import React, { Component, FormEvent, createRef } from 'react';

interface LoginData {
    email?: string;
    password?: string;
}

class FormLogin extends Component<any, LoginData>{
    private myRef: React.RefObject<HTMLInputElement>;
    passwordRef: React.RefObject<HTMLInputElement>;
    constructor(props: Readonly<any>) {
        super(props);
        this.state = { email: '', password: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.myRef = createRef();
        this.passwordRef = createRef();

    }

    handleChange(event: FormEvent) {
        //const name = (this.refs['name'] as any as HTMLInputElement).value.trim();
        console.log(this.myRef);
        this.setState({ email: (this.myRef.current as HTMLInputElement).value, password: (this.passwordRef.current as HTMLInputElement).value},
        );
    }

    handleSubmit(event: FormEvent) {
        console.log('A email was submitted: ' + this.state.email);
        console.log('A password was submitted: ' + this.state.password);
        console.log(this.myRef.current);
        event.preventDefault();
    }
    render(): React.ReactElement {
        return (
            <div id="FormularioComponente">
                <h2>Formulario Básico Componente con REF</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email:
                        <input
                            type="text"
                            value={this.state.email}
                            ref={this.myRef}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Password:
                        <input
                            type="password"
                            value={this.state.password}
                            ref={this.passwordRef}
                            onChange={this.handleChange}
                        />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <label>Email : {this.state.email} </label>
                <label> Password : {this.state.password}</label>
            </div>
        )
    }
}

export default FormLogin;