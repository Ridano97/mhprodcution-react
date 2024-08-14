import React, { useState } from 'react'
import LogoMHP from '../Assets/logonoir.png'
import '../Styles/Accueil.css'
import LogoMHPFooter from '../Assets/logoblanc.png'
import LogoFacebook from '../Assets/icone-reseaux-sociaux/facebookblanc.png'
import LogoLinkedIn from '../Assets/icone-reseaux-sociaux/linkedinblanc.png'
import LogoVimeo from '../Assets/icone-reseaux-sociaux/vimeoblanc.png'
import LogoInstagram from '../Assets/icone-reseaux-sociaux/instablanc.png' 
import TitreMHP from '../Assets/logotitremhp.png'

const AccueilPage = () => {

    const [showLinks, setShowLinks] = useState(false);

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }

    return <>
            <div id='navbar-block'>
                <header>
                    <div id='disposition-header'>
                        <div> 
                            <a href="/accueil"><img src={LogoMHP} alt="logo" width={110} height={110}/></a>
                        </div>
                        <nav className={`stroke ${showLinks ? "show-nav" : "hide-nav"} `}>
                            <ul className='navbar_link'>
                            <li className='item-list slideInDown-1'><a className='navbar-item' href=''><span className="nav-accueil">FILMS D'ENTREPRISES</span></a></li>
                            <li className='item-list slideInDown-2'><a className='navbar-item' href=''><span className="nav-accueil">FILMS D'INDUSTRIES</span></a></li>
                            <li className='item-list slideInDown-3'><a className='navbar-item' href='/connexion-suivichantier'><span className="nav-accueil">SUIVIS DE CHANTIER</span></a></li>
                            <li className='item-list slideInDown-4'><a className='navbar-item' href='/mariage'><span className="nav-accueil">PRESTATIONS DE MARIAGES</span></a></li>
                            <li className='item-list slideInDown-5'><a className='navbar-item' href=''><span className="nav-accueil">FILMS ARTISTIQUES</span></a></li>
                            <li className='item-list slideInDown-6'><a className='navbar-item' href=''><span className="nav-accueil">PORTFOLIO</span></a></li>
                            <li className='item-list slideInDown-7'><a className='navbar-item' href='/apropos'><span className="nav-accueil">À PROPOS</span></a></li>
                            </ul>
                            <button onClick={handleShowLinks} className="navbar__burger">
                                <span className="burger-bar"></span>
                            </button>
                        </nav>
                    </div>
                </header> 
                    <main id='conteneur-accueil'> 
                        <div>
                            <img id='logotitre' src={TitreMHP} alt="logotitremhp" height={200} width={500} />
                        </div>
                        <div>
                                <a target='blank_' href='https://www.facebook.com/MohamedHenniProd/?locale=fr_FR' ><img className='reseauxsociauxII' src={LogoFacebook} alt="iconefacebook" width={40} height={40}/></a>
                                {/* <a target='blank_' href='https://www.linkedin.com/in/mohamed-henni-630187141/?originalSubdomain=fr'><img className='reseauxsociauxII' src={LogoLinkedIn} alt="iconelinkedin" width={40} height={40} /></a> */}
                                <a target='blank_' href='https://www.youtube.com/c/mohamedhennidunkerque'><img className='reseauxsociauxII' src={LogoVimeo} alt="iconeyoutube" width={40} height={40}/></a>
                                <a target='blank_' href='https://www.instagram.com/mohamed_henni/'><img className='reseauxsociauxII' src={LogoInstagram}  alt="iconeinstagram" width={40} height={40}/></a>
                         </div>
                        <a href="/apropos"><button id='aproposbutton'>À PROPOS</button></a>
                    </main>
                </div> 
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
                                    <li><a href='' target=''> <span className='navigation-footer-II'>Mention légales</span></a></li>
                                    <li><a href='' target=''> <span className='navigation-footer-II'>Politique de confidentialité</span></a></li>
                                    <li><a href='' target=''> <span className='navigation-footer-II'>Gestion des cookies</span></a></li>
                                    <li><a href='' target=''> <span className='navigation-footer-II'>Contact</span></a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </footer>
        
    </>
}


export default AccueilPage ; 
