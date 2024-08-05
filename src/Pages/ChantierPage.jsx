import React, { useEffect, useState } from 'react'
import LogoMHP from '../Assets/logoblanc.png'
import "../Styles/ChantierPage.css"
import { jwtDecode } from 'jwt-decode';
import EntrepriseService from '../Services/EntrepriseService';


const ChantierPage = () => {


    const [entreprises, setEntreprises] = useState([]);

    const token = localStorage.getItem("token")
    const decoded = jwtDecode(token); /* decodé le token pour obtenir l'ID  */ 

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
                    <li><a href=''><span className='rubrique'>À PROPOS</span></a></li>
                </ul>
            </nav>
        </div>
    </header> 
    <main>
        <div>
            <h1></h1>
        </div>
    </main>     
    </>

}



export default ChantierPage;