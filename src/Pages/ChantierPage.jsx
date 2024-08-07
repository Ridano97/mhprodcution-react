import React, { useEffect, useState } from 'react'
import LogoMHP from '../Assets/logoblanc.png'
import "../Styles/ChantierPage.css"
import { jwtDecode } from 'jwt-decode';
import EntrepriseService from '../Services/EntrepriseService';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import LogoMHPFooter from '../Assets/logoblanc.png'
import LogoFacebook from '../Assets/icone-reseaux-sociaux/facebookblanc.png'
import LogoLinkedIn from '../Assets/icone-reseaux-sociaux/linkedinblanc.png'
import LogoVimeo from '../Assets/icone-reseaux-sociaux/vimeoblanc.png'
import LogoInstagram from '../Assets/icone-reseaux-sociaux/instablanc.png' 
import TimeLapse from '../Assets/timelapse.png'


const ChantierPage = () => {


    const [entreprises, setEntreprises] = useState([]);

    const token = localStorage.getItem("token")
    const decoded = jwtDecode(token); /* decodé le token pour obtenir l'ID  */ 
    const navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem('email');
        navigate('/connexion-suivichantier');
        toast.success("Déconnexion avec succès");
    };

    const fetchEntreprisesByID = async () => {
        const data = await EntrepriseService.getEntrepriseByID(decoded.id).then((response) => {
            console.log(response.data);
            setEntreprises(response.data)
        }) 
    }

    useEffect(() => {
        fetchEntreprisesByID();
    }, [])

    return <>

    <header id="navbar-background">   
        <div id='navbar-header'>
            <div> 
                <a href="/accueil"><img src={LogoMHP} alt="logo" width={100} height={100}/></a>
            </div>
            <nav className='stroke'>
                <ul>
                    <li><a href=''><span className='rubrique'>FILMS D'ENTREPRISES</span></a></li>
                    <li><a href=''><span className='rubrique'>FILMS D'INDUSTRIES</span></a></li>
                    <li><a href='/chantier'><span className='rubrique'>SUIVIS DE CHANTIER</span></a></li>
                    <li><a href='/mariage'><span className='rubrique'>PRESTATIONS DE MARIAGES</span></a></li>
                    <li><a href=''><span className='rubrique'>FILMS ARTISTIQUES</span></a></li>
                    <li><a href=''><span className='rubrique'>PORTFOLIO</span></a></li>
                    <li><a href='/apropos'><span className='rubrique'>À PROPOS</span></a></li>
                </ul>
            </nav>
        </div>
    </header> 
    <main id='main-conteneur'>
        <div id='status'>
                <p id='etat'>Entreprise Professionnelle</p>
                <button id='logoutII' onClick={handleLogout}>Déconnexion</button>
        </div>
        <div>
            <h1 id='titre-entreprise'>{entreprises?.ent_nom}</h1>
        </div>
        <div id='block-timelapse'>
            <img src={TimeLapse} alt="photodecamerachantier" />
        </div>
    </main>     
    <footer id='footerII'>
                    <div id='footer-conteneur'>
                        <div id='conteneur-image'>
                            <img src={LogoMHPFooter} alt="logomhp" width={90} height={90} />
                            <div>
                                <a target='blank_' href='https://www.facebook.com/MohamedHenniProd/?locale=fr_FR' ><img className='reseauxsociaux' src={LogoFacebook} alt="iconefacebook" width={30} height={30}/></a>
                                <a target='blank_' href='https://www.linkedin.com/in/mohamed-henni-630187141/?originalSubdomain=fr'><img className='reseauxsociaux' src={LogoLinkedIn} alt="iconelinkedin" width={30} height={30} /></a>
                                <a target='blank_' href='https://www.youtube.com/c/mohamedhennidunkerque'><img className='reseauxsociaux' src={LogoVimeo} alt="iconeyoutube" width={30} height={30}/></a>
                                <a target='blank_' href='https://www.instagram.com/mohamed_henni/'><img className='reseauxsociaux' src={LogoInstagram}  alt="iconeinstagram" width={30} height={30}/></a>
                            </div>
                        </div>
                        <div>
                            <nav className='stroke'>
                                <ul id='conteneur-liste-footer'>
                                    <li><a href='' target=''> <span className='navigation-footer'>Mention légales</span></a></li>
                                    <li><a href='' target=''> <span className='navigation-footer'>Politique de confidentialité</span></a></li>
                                    <li><a href='' target=''> <span className='navigation-footer'>Gestion des cookies</span></a></li>
                                    <li><a href='' target=''> <span className='navigation-footer'>Contact</span></a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </footer>
    </>

}



export default ChantierPage;