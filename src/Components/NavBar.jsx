import React, { useState } from 'react'
import LogoMHP from '../Assets/logonoir.png'
import '../Styles/NavBar.css';
 
const NavBar = () => {

    const [showLinks, setShowLinks] = useState(false);

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }

    return <>
        <header>
            <div id='header-conteneur'>
                <div> 
                    <a href="/accueil"><img src={LogoMHP} alt="logo" width={100} height={100}/></a>
                </div>
                <nav className={`stroke ${showLinks ? "show-nav" : "hide-nav"} `}>
                    <ul className='navbar_link'>
                       <li className='item-list slideInDown-1'>
                            <a className='navbar-item' href=''><span>FILMS D'ENTREPRISES</span></a>
                        </li>
                       <li className='item-list slideInDown-2'>
                            <a className='navbar-item' href=''><span>FILMS D'INDUSTRIES</span></a>
                        </li>
                       <li className='item-list slideInDown-3'>
                            <a className='navbar-item' href='/connexion-suivichantier'><span>SUIVIS CHANTIERS</span></a>
                        </li>
                       <li className='item-list slideInDown-4'>
                            <a className='navbar-item' href='/mariage'><span>PRESTATIONS DE MARIAGES</span></a>
                        </li>
                       <li className='item-list slideInDown-5'>
                            <a className='navbar-item' href=''><span>FILMS ARTISTIQUES</span></a>
                        </li>
                       <li className='item-list slideInDown-6'>
                            <a className='navbar-item' href=''><span>PORTFOLIO</span></a>
                        </li>
                       <li className='item-list slideInDown-7'>
                            <a className='navbar-item' href='apropos'><span>À PROPOS</span></a>
                        </li>
                    </ul>
                    <button onClick={handleShowLinks} className="navbar__burger">
                        <span className="burger-bar"></span>
                    </button>
                </nav>
            </div>
        </header>
    </>
}

export default NavBar ;