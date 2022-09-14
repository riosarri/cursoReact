import React from 'react';
import './App.css';
import MiComponente from './components/MiComponente';
import Jedi from './components/Jedi';
import Sith from './components/Sith';
import Menu from './components/Menu';
import Cabecera from './components/Cabecera';
import PiePagina from './components/PiePagina';
import ContenidoPaginaPrincipal from './components/ContenidoPaginaPrincipal';
import FichaCliente from './components/props/FichaCliente';
import Envio from './components/props/Envio';
import FichaAlumno from './components/props/FichaAlumno';
import FormularioLogin from './components/estados/FormularioLogin';
import FichaEmpleado from './components/estados/FichaEmpleado';
import EventosComponente from './components/eventos/EventosComponente';
import FormularioBasicoComponente from './components/formularios/FormularioBasicoComponente';
import FormularioBasicoComponenteSinRef from './components/formularios/FormularioBasicoComponenteCreateRef';
import FormLogin from './components/formularios/FormLogin';
import LoginFormValidationComponente from './components/formularios/LoginFormValidationComponente';
import CochesComponente from './components/coches/CochesComponente';
import ClientesComponente from './components/clientes/ClientesComponente';

function App() {
  return (
    <div className="App">
      <Cabecera />
      <Menu />
      <CochesComponente />
      <ClientesComponente />
      {/** Codigo comentado dentro de braces
      <MiComponente />
      <Jedi />
      <Sith />
      <ContenidoPaginaPrincipal />
      <FichaCliente />
      <Envio />
      <FichaAlumno />
      <FormularioLogin />
      <FichaEmpleado />
      <EventosComponente />
    */}
    
    <FormularioBasicoComponente />
    <FormularioBasicoComponenteSinRef />
    <FormLogin />
    <LoginFormValidationComponente />
      <PiePagina />
    </div>
  );
}

export default App;
