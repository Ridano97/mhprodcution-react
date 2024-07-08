import React from 'react'
import '../Styles/SuiviChantier.css'
import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';


const ConnexionSuiviChantierPage = () => {

    
    return <>
        <NavBar/>
        <main>
            <div id='formulaire-chantier'>
                <label className='identification-entreprise' htmlFor="email">Entreprise</label>
                <input className='connexion' name='email' required id='ema' type="text" placeholder="Nom de l'entreprise"/>
                <label className='identification-entreprise' htmlFor="mdp">Mot de passe</label>
                <input className='connexion' required type="password" name="mdp" id="mdp" placeholder='Mot de passe' />
                <input className='button'  type="button" value="Accès" />
            </div>
        </main>
        <Footer/>
    </>
}


export default ConnexionSuiviChantierPage ; 