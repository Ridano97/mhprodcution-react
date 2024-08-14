import React, { useEffect, useState } from 'react'
import "../Styles/APropos.css"
import LogoMHP from "../Assets/logoblanc.png"
import MHP from "../Assets/mhpmannequin.JPG"
import MHPDRONE from "../Assets/droneshoot.JPG"
import EntrepriseService from '../Services/EntrepriseService'
import LogoMHPFooter from '../Assets/logoblanc.png'
import LogoFacebook from '../Assets/icone-reseaux-sociaux/facebookblanc.png'
import LogoLinkedIn from '../Assets/icone-reseaux-sociaux/linkedinblanc.png'
import LogoVimeo from '../Assets/icone-reseaux-sociaux/vimeoblanc.png'
import LogoInstagram from '../Assets/icone-reseaux-sociaux/instablanc.png' 


const AProposPage = () => {
    
    const [showLinks, setShowLinks] = useState(false);
    const [entreprises, setEntreprises] = useState([]);

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }

    const fetchEntreprises = async () => {
        const response = await EntrepriseService.getAllEntreprise();
        setEntreprises(response.data);
    };

    useEffect(() => {
        fetchEntreprises();
    }, []);

    return <>
        <header id='apropos-header'>
            <div id='header-conteneur'>
                <div> 
                    <a href="/accueil"><img src={LogoMHP} alt="logo" width={100} height={100}/></a>
                </div>
                <nav className={`stroke ${showLinks ? "show-nav" : "hide-nav"} `}>
                    <ul className='navbar_link'>
                       <li className='item-list slideInDown-1'>
                            <a className='navbar-item'  href=''><span className='apropos-navigation'>FILMS D'ENTREPRISES</span></a>
                        </li>
                       <li className='item-list slideInDown-1'>
                            <a className='navbar-item'  href=''><span className='apropos-navigation'>FILMS D'INDUSTRIES</span></a>
                        </li>
                       <li className='item-list slideInDown-1'>
                            <a className='navbar-item'  href='/connexion-suivichantier'><span className='apropos-navigation'>SUIVIS CHANTIERS</span></a>
                        </li>
                       <li className='item-list slideInDown-1'>
                            <a className='navbar-item'  href='/mariage'><span className='apropos-navigation'>PRESTATIONS DE MARIAGES</span></a>
                        </li>
                       <li className='item-list slideInDown-1'>
                            <a className='navbar-item'  href=''><span className='apropos-navigation'>FILMS ARTISTIQUES</span></a>
                        </li>
                       <li className='item-list slideInDown-1'>
                            <a className='navbar-item'  href=''><span className='apropos-navigation'>PORTFOLIO</span></a>
                        </li>
                       <li className='item-list slideInDown-1'>
                            <a className='navbar-item'  href='/apropos'><span className='apropos-navigation'>À PROPOS</span></a>
                        </li>
                    </ul>
                    <button onClick={handleShowLinks} className="navbar__burger">
                                <span className="burger-bar"></span>
                    </button>
                </nav>
            </div>
        </header>
        <main id='conteneur-apropos'>
            <div id='jumbotron-apropos'></div>
            <div className='apropos-informations'>
                <div className='items-conteneur-apropos'>
                    <p className='text-apropos'>
                        VOTRE CRÉATIVITÉ NOTRE EXPERTISE VIDÉOGRAPHIQUE
                    </p>
                </div>
                <div className='items-conteneur-apropos'>
                    <p className='text-aproposII'>
                        Mohamed Henni Production est une entreprise spécialisée dans la création de contenus audiovisuels sur mesure pour les professionnels et les entreprises. Notre expertise se distingue particulièrement dans l'industrie et le suivi de chantier, offrant une perspective unique et captivante. En plus de nos services professionnels, nous mettons notre talent au service des moments inoubliables tels que les mariages, capturant l'essence même de ces événements spéciaux à travers des films uniques et émouvants. De plus, nous donnons vie à des vidéos artistiques qui transmettent des messages puissants et engageants.
                    </p>
                </div>
            </div>
            <div className='apropos-informations'>
                <div className='items-conteneur-apropos'>
                    <p className='text-aproposII'>
                        Je suis Mohamed Henni, un vidéaste passionné originaire de Dunkerque. Depuis mes débuts à l'âge de 17 ans, je me suis consacré à captureret partager des moments uniques à travers la vidéo. En 2014, j'ai franchi le pas en professionnalisant mes services, marquant ainsi le début d'une aventure extraordinaire.
                    </p>
                </div>
                <div className='items-conteneur-apropos'>
                    <img className='apropos-image' src={MHP} alt="photodemohamed" width={470} height={600}/>
                </div>
            </div>
            <div className='apropos-informationsIII'>
            <div className='items-conteneur-apropos'>
                    <img className='apropos-image'  src={MHPDRONE} alt="photodemohamed" width={470} height={600}/>
                </div>
                <div className='items-conteneur-aproposIII'>
                    <p className='text-aproposII'>
                        Au fil des années, j'ai eu le privilège d'accumuler près de 4 millions de vues sur l'ensemble des réseaux sociaux, résultat de mon travail acharné et de ma créativité sans limite.
                        Avec plus de 2500 vidéos réalisées au cours de la dernière décennie, mon expertise s'est affirmée et ma vision artistique s'est affinée.                    
                    </p>
                </div>
            </div>
            <div className='conteneur-entreprise-partenaire'>
                    <h1 id='titre-apropos-entreprise'>IL NOUS ONT FAIT CONFIANCE</h1>
                    <div id='conteneur-image-partenaire'>
                    {entreprises.map(entreprise => (
                        <img id='logo-entreprise-partenaire' src={entreprise.ent_logo_url} alt="logo_entreprise" height={80} width={85} />
                    ))}
                    </div>
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
                                    <li><a href='' target=''> <span className='navigation-chantier'>Mention légales</span></a></li>
                                    <li><a href='' target=''> <span className='navigation-chantier'>Politique de confidentialité</span></a></li>
                                    <li><a href='' target=''> <span className='navigation-chantier'>Gestion des cookies</span></a></li>
                                    <li><a href='' target=''> <span className='navigation-chantier'>Contact</span></a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
         </footer>
    
    </>
}


export default AProposPage ;