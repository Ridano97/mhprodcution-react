import React from 'react'
import LogoMHP from '../Assets/logoblanc.png'
import '../Styles/ConnexionAdministrateurPage.css'
import Footer from '../Components/Footer'

const ConnexionAdministrateurPage = () => {

    return <>
    <div id='main-arriere-plan'>
        <div id='logo-administrateur'>
            <img src={LogoMHP} alt="logomhp" width={350} height={350} />
        </div>
        <div id='formulaire-connexion-admin'>
            <h2 id='sous-titre-admin'>ACCÈS ADMINISTRATEUR</h2>
            <label htmlFor="">Administrateur</label>
            <input required type="text" />
            <label htmlFor="">Mot de passe </label>
            <input required type="password" name="" id="" />
            <input className="button" type="button" value="Connexion" />
        </div>
    </div>    
    <Footer/>
    </>
}


export default ConnexionAdministrateurPage ;