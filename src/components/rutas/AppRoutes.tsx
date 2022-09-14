import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CochesComponente from '../coches/CochesComponente';
import Detalle from './Detalle';
import Listado from './Listado';
import Navega from './Navega';
import { About, Home } from './Pages';
class AppRoutes extends React.Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="navega" element={<Navega />} />
                <Route path="listado" element={<Listado />} />
                <Route path="listado/:id" element={<Detalle />} />
                <Route path="coches" element={<CochesComponente />} />

            </Routes>
        );
    }
}
export default AppRoutes;
