import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AccueilPage from './Pages/AccueilPage';
import TableauDeBord from './Pages/TableauDeBord';
import ConnexionAdministrateur from './Pages/ConnexionAdministrateur';
import ConnexionSuiviChantierPage from './Pages/ConnexionSuiviChantierPage';
import ProtectedRoutes from './Utils/ProtectedRoutes';
import ChantierPage from './Pages/ChantierPage';
import MariagePage from './Pages/MariagePage';
import Unauthorized from './Utils/Unauthorized';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import AProposPage from './Pages/AProposPage';
import ProtectedRoutesEntreprise from './Utils/ProtectedRoutesEntreprises';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='accueil' element={<AccueilPage />} />
                <Route path='connexion-admin' element={<ConnexionAdministrateur />} />
                <Route path='connexion-suivichantier' element={<ConnexionSuiviChantierPage />} />
                <Route path='mariage' element={<MariagePage />} />
                <Route path='apropos' element={<AProposPage />} />
                <Route path='unauthorized' element={<Unauthorized />} />
                <Route element={<ProtectedRoutes />}>
                    <Route path='tableaudebord-administrateur' element={<TableauDeBord />} />
                </Route>
                <Route element={<ProtectedRoutesEntreprise/>}>
                    <Route path='chantier' element={<ChantierPage />} />
                </Route>
            </Routes>
            <ToastContainer position="top-right" autoClose={5000} />
        </BrowserRouter>
    );
}
export default App;
