import React from 'react';
import LogoMHP from '../Assets/logonoir.png'
import LogoFacebook from '../Assets/facebook.png'
import LogoLinkedIn from '../Assets/linkedIn.png'
import LogoYoutube from '../Assets/youtube.png'
import LogoInstagram from '../Assets/instagram.png'
import '../Styles/Footer.css'

const Footer = () => {

    return <>
    
    <footer>
        <div id='footer-conteneur'>
            <div id='conteneur-image'>
                <img src={LogoMHP} alt="logomhp" width={90} height={90} />
                <div>
                    <a target='blank_' href='https://www.facebook.com/MohamedHenniProd/?locale=fr_FR' ><img className='reseauxsociaux' src={LogoFacebook} alt="iconefacebook" width={20} height={20}/></a>
                    <a target='blank_' href='https://www.linkedin.com/in/mohamed-henni-630187141/?originalSubdomain=fr'><img className='reseauxsociaux' src={LogoLinkedIn} alt="iconelinkedin" width={20} height={20} /></a>
                    <a target='blank_' href='https://www.youtube.com/c/mohamedhennidunkerque'><img className='reseauxsociaux' src={LogoYoutube} alt="iconeyoutube" width={20} height={20}/></a>
                    <a target='blank_' href='https://www.instagram.com/mohamed_henni/'><img className='reseauxsociaux' src={LogoInstagram} alt="iconeinstagram" width={20} height={20}/></a>
                </div>
            </div>
            <div>
                <nav className='stroke'>
                    <ul id='conteneur-liste-footer'>
                        <li><a href='' target=''>Mention légales</a></li>
                        <li><a href='' target=''>Politique de confidentialité</a></li>
                        <li><a href='' target=''>Gestion des cookies</a></li>
                        <li><a href='' target=''>Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </footer>
    
    </>
}




export default Footer ;