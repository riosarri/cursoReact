import React, { FunctionComponent } from "react";
import { Cliente } from "./Cliente";

interface Props {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onAdd: (event: React.FormEvent<HTMLFormElement>) => void;
    cliente: Cliente;
}

export const AddClienteForm: FunctionComponent<Props> = ({
    onChange,
    onAdd,
    cliente
}) => (
    <form onSubmit={onAdd}>
        <label htmlFor="nombre">Nombre:</label>
        <input id="nombre"onChange={onChange} value={cliente.nombre} /> <br/>
        <label htmlFor="dir">Dirección:</label>
        <input id="dir"onChange={onChange} value={cliente.direccion} /> <br/>
        <label htmlFor="tlf">Tlf:</label>
        <input id="tlf"onChange={onChange} value={cliente.tlf} /> <br/>
        <button type="submit">Añadir Cliente</button>
    </form>
);