import React from 'react'
import "../Styles/APropos.css"
import LogoMHP from "../Assets/logoblanc.png"


const AProposPage = () => {
    


    return <>
        <header id='apropos-header'>
            <div id='header-conteneur'>
                <div> 
                    <a href="/accueil"><img src={LogoMHP} alt="logo" width={100} height={100}/></a>
                </div>
                <nav className='stroke'>
                    <ul>
                       <li>
                            <a href=''><span className='apropos-navigation'>FILMS D'ENTREPRISES</span></a>
                        </li>
                       <li>
                            <a href=''><span className='apropos-navigation'>FILMS D'INDUSTRIES</span></a>
                        </li>
                       <li>
                            <a href='/connexion-suivichantier'><span className='apropos-navigation'>SUIVIS CHANTIERS</span></a>
                        </li>
                       <li>
                            <a href='/mariage'><span className='apropos-navigation'>PRESTATIONS DE MARIAGES</span></a>
                        </li>
                       <li>
                            <a href=''><span className='apropos-navigation'>FILMS ARTISTIQUES</span></a>
                        </li>
                       <li>
                            <a href=''><span className='apropos-navigation'>PORTFOLIO</span></a>
                        </li>
                       <li>
                            <a href='/apropos'><span className='apropos-navigation'>À PROPOS</span></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        <main>
            
        </main>
    
    </>
}


export default AProposPage ;