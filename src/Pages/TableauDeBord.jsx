import React, { useEffect, useState } from 'react'
import NavBar from '../Components/NavBar';
import '../Styles/TableauDeBord.css'
import Footer from '../Components/Footer';
import AdministrateurService from '../Services/AdministrateurService';
import EntrepriseService from '../Services/EntrepriseService';


const TableauDeBord = () => {

    const [administrateurs, setAdministrateurs] = useState([]);
    const [entreprises, setEntreprises] = useState([]);

    const fetchAdministrateurs = async () => {
        try {
            const response = await AdministrateurService.getAllAdministrateur();
            setAdministrateurs(response);
        } catch (error) {
            console.log(error);
        }

    }

    let token = localStorage.getItem("token");
    console.log(token);

    const fetchEntreprises = async () => {
        try {
            const response = await EntrepriseService.getAllEntreprise();
            setEntreprises(response)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect (() => {
        fetchAdministrateurs();
    }, [])

    return <> 
        <NavBar/>
        <div>
            <p id='etat'>Administrateur</p>
        </div>
        <div id='titre-tableaudebord'>
            <h1>Tableau de bord</h1>
            <h2> NAME ADMIN </h2>
        </div>
        <div id='block-crud'>
            <div className='block-conteneur-crud'>
                <a href='#ajoutentreprise' target='' ><h3>Ajouter une entreprise cliente</h3></a>
            </div>
            <div className='block-conteneur-crud'>
                <a href='#modifierentreprise' target=''><h3>Modifier/Remplacer une entreprise cliente</h3></a>
            </div>
            <div className='block-conteneur-crud'>
                <a href='#supprimerentreprise' target=''><h3>Supprimer une entreprise cliente </h3></a>
            </div>
            <div className='block-conteneur-crud'>
                <a href='#afficherentreprise' target=''><h3>Afficher via l'ID une entreprise cliente</h3></a>
            </div>
        </div>
        <div id='block-nb-entreprise'>
            <h3>Nombre d'entreprise : "SELECT * FROM ENTREPRISE"</h3>
        </div>
        <div id='block-conteneur-formulaire'>
            <div className='block-crud-formulaire' >
                <h4 id='ajoutentreprise'>Ajouter une entreprise</h4>
                <label className="designation-champ" htmlFor="">NOM :</label>
                <input type="text" />
                <label className="designation-champ" htmlFor="">MOT DE PASSE :</label> 
                <input type="password" name="" id="" />
                <label className="designation-champ" htmlFor="">DATE D'INSCRIPTION</label>
                <input type="date" name="" id="" />
                <label className="designation-champ" htmlFor="">URL LOGO</label>
                <input type="text" name="" id="" />
                <label className="designation-champ" htmlFor=""></label>
                <input className='button-formulaire' type="submit" value="Valider" />
            </div>
            <div className='block-crud-formulaire' >
                <h4 id='modifierentreprise'>Modifier / Remplacer une entreprise cliente</h4>
                <label className="designation-champ" htmlFor="">NOM :</label>
                <input type="text" />
                <label className="designation-champ" htmlFor="">MOT DE PASSE :</label> 
                <input type="password" name="" id="" />
                <label className="designation-champ" htmlFor="">URL LOGO</label>
                <input type="text" name="" id="" />
                <label className="designation-champ" htmlFor=""></label>
                <input className='button-formulaire' type="submit" value="Valider" />
            </div>
            <div className='block-crud-formulaire' >
                <h4 id='supprimerentreprise'>Supprimer une entreprise cliente</h4>
                <label className="designation-champ" htmlFor="">NOM :</label>
                <input type="text" />
                <label className="designation-champ" htmlFor=""></label>
                <input className='button-formulaire' type="submit" value="Valider" />
            </div>
            <div className='block-crud-formulaire' >
                <h4 id='afficherentreprise'>Afficher une entreprise cliente via l'ID</h4>
                <label className="designation-champ" htmlFor="">ID Entreprise :</label>
                <input type="text" />
                <label className="designation-champ" htmlFor=""></label>
                <input className='button-formulaire' type="submit" value="Valider" />
            </div>
        </div>
        <Footer/>
    </>
}

export default TableauDeBord ;