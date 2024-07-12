import React from 'react'
import LogoMHP from '../Assets/logoblanc.png'
import '../Styles/Accueil.css'
import Footer from '../Components/Footer';

const AccueilPage = () => {


    let token = localStorage.getItem("token");
    console.log(token);

    return <>
        <div id='navbar-block'>
            <div id='header-conteneur'>
                <div> 
                    <a href="/accueil"><img src={LogoMHP} alt="logo" width={100} height={100}/></a>
                </div>
                <nav className='stroke'>
                    <ul>
                       <li><a href=''><span className='rubrique'>FILMS D'ENTREPRISES</span></a></li>
                       <li><a href=''><span className='rubrique'>FILMS D'INDUSTRIES</span></a></li>
                       <li><a href=''><span className='rubrique'>SUIVIS DE CHANTIER</span></a></li>
                       <li><a href=''><span className='rubrique'>PRESTATIONS DE MARIAGES</span></a></li>
                       <li><a href=''><span className='rubrique'>FILMS ARTISTIQUES</span></a></li>
                       <li><a href=''><span className='rubrique'>PORTFOLIO</span></a></li>
                       <li><a href=''><span className='rubrique'>À PROPOS</span></a></li>
                    </ul>
                </nav>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
        <Footer/>
    </>
}


export default AccueilPage ; 
