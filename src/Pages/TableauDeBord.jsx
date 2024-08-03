import React, { useEffect, useState } from 'react'
import NavBar from '../Components/NavBar';
import '../Styles/TableauDeBord.css';
import Footer from '../Components/Footer';
import AdminService from '../Services/AdministrateurService';
import { jwtDecode } from 'jwt-decode';
import EntrepriseService from '../Services/EntrepriseService';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';



const TableauDeBord = () => {

    const [administrateurs, setAdministrateurs] = useState({});
    const [entreprises, setEntreprises] = useState([]);
    const [entreprisesID, setEntreprisesID] = useState ([]);
    const [nouvelleEntreprise, setNouvelleEntreprise] = useState({
        ent_nom : "",
        ent_mdp : "",
        ent_date_inscription : "",
        ent_logo_url : "" 
    }); 
    const token = localStorage.getItem("token");
    const decoded = jwtDecode(token); /* decodé le token pour obtenir l'ID  */ 
    const navigate = useNavigate();

    /* console.log(decoded); */

      // handle click pour l'évenement de la déconnexion avec le button
  const handleLogout = () => {
    // remove the token and user from the session storage
    sessionStorage.removeItem("token");
    sessionStorage.removeItem('email');
    navigate('/connexion-admin');
    toast.success("Déconnexion avec succès");
  }

    const fetchAdministrateursByID = async () => {
        const data = await AdminService.getAdministrateurByID(decoded.id).then((response) => {
            console.log(response.data);
            setAdministrateurs(response.data);
        }) 


    }
    const removeEntreprise = async (id) => {
        try {
            const response = await EntrepriseService.removeEntreprise(id)
            fetchEntreprises()
            toast.success("Entreprise supprimée")
        } catch (error) {
            toast.error(error.response.data.error)
            console.log(error);
            
        }

    }

    console.log(administrateurs);


    const fetchEntreprises = async () => {
        const response = await EntrepriseService.getAllEntreprise().then((response) => {
            console.log(response.data);
            setEntreprises(response.data);
        });

    console.log(entreprises);
            
    }


    const addEntreprises = async () => {
        try {
            const response = await EntrepriseService.addEntreprise(nouvelleEntreprise);
            toast.success("Entreprise ajoutée");
            fetchEntreprises()
        } catch (error) {
            toast.error(error.response.data.error)
            console.log(error);
        }
    }

    const updateEntreprise = () => {
        try {
            
        } catch (error) {
            
        }
    }

    useEffect (() => {
        fetchAdministrateursByID();    /* Que des fetch la plupart du temps dans les useEffects grossomodo */
        fetchEntreprises();

    }, []);


    return <> 
        <NavBar/>
        <div id='status'>
            <p id='etat'>Administrateur</p>
            <button id='logout' onClick={handleLogout}>Déconnexion</button>
        </div>
        <div id='titre-tableaudebord'>
            <h1>Tableau de bord</h1>
            <h2> {administrateurs?.adm_nom} </h2> {/* le point d'interrogation signifie que si la clé de l'objet n'existe pas, ça ne cassera pas */}
        </div>
        <div id='jumbotron'>
                <div className='block-conteneur-crud'>
                    <a href='#ajoutentreprise' target='self_' ><h3>Ajouter une entreprise cliente</h3></a>
                </div>
        </div>
        <div id='block-nb-entreprise'>
            <h3>Nombre d'entreprise : {entreprises.length}
            </h3>
        </div>
        <div id='block-conteneur-formulaire'>
            <div className='block-crud-formulaire' >
                <h4 id='ajoutentreprise'>Ajouter une entreprise</h4>
                <label className="designation-champ" htmlFor="">NOM :</label>
                <input type="text" required onChange={(e) => {setNouvelleEntreprise({ ...nouvelleEntreprise, ent_nom : e.target.value })}} />
                <label className="designation-champ" htmlFor="">MOT DE PASSE :</label> 
                <input type="password" required onChange={(e) => {setNouvelleEntreprise({ ...nouvelleEntreprise, ent_mdp : e.target.value})}}/>
                <label className="designation-champ" htmlFor="">DATE D'INSCRIPTION</label>
                <input type="date" required onChange={(e) => {setNouvelleEntreprise ({ ...nouvelleEntreprise, ent_date_inscription : e.target.value})}} />
                <label className="designation-champ" htmlFor="">URL LOGO</label>
                <input type="text"  required onChange={(e) => {setNouvelleEntreprise ({ ...nouvelleEntreprise, ent_logo_url : e.target.value})}} />
                <label className="designation-champ" htmlFor=""></label>
                <input className='button-formulaire' type="submit" value="Valider" onClick={() => { addEntreprises()}} />
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
        </div>
        <div id='tableau-gestion'>
            <table >
                <thead>
                <tr>
                    <th>ID Entreprise</th>
                    <th>Nom</th>
                    <th>Date d'inscription</th>
                    <th>LOGO</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {entreprises.map(entreprise => (
                    <tr key={entreprise.ent_id}>
                    <td>
                        {entreprise.ent_id}
                    </td>
                    <td>
                        {entreprise.ent_nom}
                    </td>
                    <td>
                        {entreprise.ent_date_inscription}
                    </td>
                    <td>
                        <img id='logo-entreprise' src={entreprise.ent_logo_url} alt="logo_entreprise" height={80} width={85}/>
                    </td>
                    <td>
                        <button className='action'>MODIFIER</button>
                        <button className='action' onClick={() => removeEntreprise(entreprise.ent_id)}>SUPPRIMER</button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        <Footer/>
    </>
}

export default TableauDeBord ;