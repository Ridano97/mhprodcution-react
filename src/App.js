import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AccueilPage from './Pages/AccueilPage';
import SuiviChantierPage from './Pages/SuiviChantierPage';
import ConnexionAdministrateurPage from './Pages/ConnexionAdministrateurPage';
import TableauDeBord from './Pages/TableauDeBord';
import { ToastContainer } from 'react-toastify';

const App = () => {
    return <>
        <BrowserRouter>
        <Routes>
            <Route path='accueil' element={<AccueilPage/>}/>
            <Route path='connexion-administrateur' element={<ConnexionAdministrateurPage/>}/>
            <Route path='tableaudebord-administrateur' element={<TableauDeBord/>}/>
            <Route path='suivichantier' element={<SuiviChantierPage/>}/>
        </Routes>
        <ToastContainer position="top-right" autoClose={5000} />
        </BrowserRouter>
    </>
}


export default App ;