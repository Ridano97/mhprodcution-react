import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AccueilPage from './Pages/AccueilPage';
import TableauDeBord from './Pages/TableauDeBord';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import ConnexionAdministrateur from './Pages/ConnexionAdministrateur';
import ConnexionSuiviChantierPage from './Pages/ConnexionSuiviChantierPage';

const App = () => {
    return <>
        <BrowserRouter>
        <Routes>
            <Route path='accueil' element={<AccueilPage/>}/>
            <Route path='connexion-admin' element={<ConnexionAdministrateur/>}/>
            <Route path='tableaudebord-administrateur' element={<TableauDeBord/>}/>
            <Route path='connexion-suivichantier' element={<ConnexionSuiviChantierPage/>}/>
        </Routes>
        <ToastContainer position="top-right" autoClose={5000} />
        </BrowserRouter>
    </>
}


export default App ;