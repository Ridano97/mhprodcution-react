import React, { useEffect, useState } from 'react'
import '../Styles/SuiviChantier.css'
import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import instance from '../API/Axios';
import LogoMHP from '../Assets/logoblanc.png'


const ConnexionSuiviChantierPage = () => {

    const [nom, setNom] = useState([]);
    const [mdp, setMdp] = useState([]);
    const navigate = useNavigate();


    const loginEntreprise = () => {
            instance().post("/auth/loginentreprise" , {
                nom : nom,
                mdp : mdp
            })
            .then(function (response) {
                console.log(response.data.token);
                toast.success(response.data.message);
                localStorage.setItem("token", response.data.token);
                navigate("/chantier");
            })
            .catch(function (error) {
                toast.error(error.response.data.error)
            })
        }


    return <>
            <div id='back-chantier'>
                <header>
                        <div id='disposition-header'>
                            <div> 
                                <a href="/accueil"><img src={LogoMHP} alt="logo" width={110} height={110}/></a>
                            </div>
                            <nav className='stroke'>
                                <ul>
                                <li><a href=''><span className='rubrique'>FILMS D'ENTREPRISES</span></a></li>
                                <li><a href=''><span className='rubrique'>FILMS D'INDUSTRIES</span></a></li>
                                <li><a href='/connexion-suivichantier'><span className='rubrique'>SUIVIS DE CHANTIER</span></a></li>
                                <li><a href='/mariage'><span className='rubrique'>PRESTATIONS DE MARIAGES</span></a></li>
                                <li><a href=''><span className='rubrique'>FILMS ARTISTIQUES</span></a></li>
                                <li><a href=''><span className='rubrique'>PORTFOLIO</span></a></li>
                                <li><a href='/apropos'><span className='rubrique'>À PROPOS</span></a></li>
                                </ul>
                            </nav>
                        </div>
                </header> 
                <main>
                    <div id='formulaire-chantier'>
                        <label className='identification-entreprise' htmlFor="email">Entreprise</label>
                        <input className='connexion' name='email' required defaultValue={nom} onChange={(e) => {setNom(e.target.value)}} type="text" placeholder="Nom de l'entreprise"/>
                        <label className='identification-entreprise' htmlFor="mdp">Mot de passe</label>
                        <input className='connexion' required type="password" defaultValue={mdp} onChange={(e) => {setMdp(e.target.value)}} name="mdp" id="mdp" placeholder='Mot de passe' />
                        <input className='button' onClick={() => {loginEntreprise()}} type="button" value="Accès" />
                    </div>
                </main>
            </div>    
        <Footer/>
    </>
}


export default ConnexionSuiviChantierPage ; 