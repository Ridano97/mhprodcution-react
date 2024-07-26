import React from 'react'
import LogoMHP from '../Assets/logonoir.png'
import '../Styles/NavBar.css';
 
const NavBar = () => {

    return <>
        <header>
            <div id='header-conteneur'>
                <div> 
                    <a href="/accueil"><img src={LogoMHP} alt="logo" width={100} height={100}/></a>
                </div>
                <nav className='stroke'>
                    <ul>
                       <li>
                            <a href=''><span>FILMS D'ENTREPRISES</span></a>
                        </li>
                       <li>
                            <a href=''><span>FILMS D'INDUSTRIES</span></a>
                        </li>
                       <li>
                            <a href='/connexion-suivichantier'><span>SUIVIS CHANTIERS</span></a>
                        </li>
                       <li>
                            <a href=''><span>PRESTATIONS DE MARIAGES</span></a>
                        </li>
                       <li>
                            <a href=''><span>FILMS ARTISTIQUES</span></a>
                        </li>
                       <li>
                            <a href=''><span>PORTFOLIO</span></a>
                        </li>
                       <li>
                            <a href=''><span>À PROPOS</span></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    </>
}

export default NavBar ;