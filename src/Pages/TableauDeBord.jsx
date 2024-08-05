import React, { useEffect, useState } from 'react';
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
    const [nouvelleEntreprise, setNouvelleEntreprise] = useState({
        ent_nom: "",
        ent_mdp: "",
        ent_date_inscription: "",
        ent_logo_url: ""
    });
    const [entrepriseAModifier, setEntrepriseAModifier] = useState({
        ent_id: "",
        ent_nom: "",
        ent_mdp: "",
        ent_date_inscription: "",
        ent_logo_url: ""
    });
    const token = localStorage.getItem("token");
    const decoded = jwtDecode(token);
    const navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem('email');
        navigate('/connexion-admin');
        toast.success("Déconnexion avec succès");
    };

    const fetchAdministrateursByID = async () => {
        const data = await AdminService.getAdministrateurByID(decoded.id);
        setAdministrateurs(data.data);
    };

    const fetchEntreprises = async () => {
        const response = await EntrepriseService.getAllEntreprise();
        setEntreprises(response.data);
    };

    const addEntreprises = async () => {
        try {
            await EntrepriseService.addEntreprise(nouvelleEntreprise);
            toast.success("Entreprise ajoutée");
            fetchEntreprises();
        } catch (error) {
            toast.error(error.response.data.error);
        }
    };

    const updateEntreprise = async () => {
        try {
            await EntrepriseService.updateEntreprise(entrepriseAModifier.ent_id, {
                ent_nom: entrepriseAModifier.ent_nom,
                ent_mdp: entrepriseAModifier.ent_mdp,
                ent_date_inscription: entrepriseAModifier.ent_date_inscription,
                ent_logo_url: entrepriseAModifier.ent_logo_url
            });
            toast.success("Modification réalisée");
            fetchEntreprises();
        } catch (error) {
            toast.error(error.response.data.error);
        }
    };


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
 
    useEffect(() => {
        fetchAdministrateursByID();
        fetchEntreprises();
    }, []);

    return (
        <>
            <NavBar />
            <div id='status'>
                <p id='etat'>Administrateur</p>
                <button id='logout' onClick={handleLogout}>Déconnexion</button>
            </div>
            <div id='titre-tableaudebord'>
                <h1>Tableau de bord</h1>
                <h2>{administrateurs?.adm_nom}</h2>
            </div>
            <div id='jumbotron'>
                <div className='block-conteneur-crud'>
                    <a href='#ajoutentreprise' target='self_' ><h3>Ajouter une entreprise cliente</h3></a>
                </div>
            </div>
            <div id='block-nb-entreprise'>
                <h3>Nombre d'entreprise : {entreprises.length}</h3>
            </div>
            <div id='block-conteneur-formulaire'>
                <div className='block-crud-formulaire'>
                    <h4 id='ajoutentreprise'>Ajouter une entreprise</h4>
                    <label className="designation-champ" htmlFor="">NOM :</label>
                    <input type="text" required onChange={(e) => setNouvelleEntreprise({ ...nouvelleEntreprise, ent_nom: e.target.value })} />
                    <label className="designation-champ" htmlFor="">MOT DE PASSE :</label>
                    <input type="password" required onChange={(e) => setNouvelleEntreprise({ ...nouvelleEntreprise, ent_mdp: e.target.value })} />
                    <label className="designation-champ" htmlFor="">DATE D'INSCRIPTION</label>
                    <input type="date" required onChange={(e) => setNouvelleEntreprise({ ...nouvelleEntreprise, ent_date_inscription: e.target.value })} />
                    <label className="designation-champ" htmlFor="">URL LOGO</label>
                    <input type="text" required onChange={(e) => setNouvelleEntreprise({ ...nouvelleEntreprise, ent_logo_url: e.target.value })} />
                    <label className="designation-champ" htmlFor=""></label>
                    <input className='button-formulaire' type="submit" value="Valider" onClick={addEntreprises} />
                </div>
  
                <div className='block-crud-formulaire'>
                    <h4 id='modifierentreprise'>Modifier / Remplacer une entreprise cliente</h4>
                    <label className="designation-champ" htmlFor="">NOM :</label>
                    <input type="text" name="ent_id" value={entrepriseAModifier.ent_nom} onChange={(e) => {setEntrepriseAModifier({...entrepriseAModifier, [e.target.name] : e.target.value}) }} />
                    <label className="designation-champ" htmlFor="">MOT DE PASSE :</label>
                    <input type="password" name="ent_nom" value={entrepriseAModifier.ent_mdp} onChange={(e) => {setEntrepriseAModifier({...entrepriseAModifier, [e.target.name] : e.target.value}) }}  />
                    <label className="designation-champ" htmlFor="">DATE D'INSCRIPTION :</label>
                    <input type="date" name="ent_mdp" value={entrepriseAModifier.ent_date_inscription} onChange={(e) => {setEntrepriseAModifier({...entrepriseAModifier, [e.target.name] : e.target.value}) }}  />
                    <label className="designation-champ" htmlFor="">URL LOGO</label>
                    <input type="text" name="ent_logo_url" value={entrepriseAModifier.ent_logo_url} onChange={(e) => {setEntrepriseAModifier({...entrepriseAModifier, [e.target.name] : e.target.value}) }}  />
                    <label className="designation-champ" htmlFor=""></label>
                    <input className='button-formulaire' type="submit" value="Valider" onClick={updateEntreprise} />
                </div>
            </div>
            <div id='tableau-gestion'>
                <table>
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
                                <td>{entreprise.ent_id}</td>
                                <td>{entreprise.ent_nom}</td>
                                <td>{entreprise.ent_date_inscription}</td>
                                <td>
                                    <img id='logo-entreprise' src={entreprise.ent_logo_url} alt="logo_entreprise" height={80} width={85} />
                                </td>
                                <td>
                                   <a href="#modifierentreprise"><button className='action' onClick={() => setEntrepriseAModifier(entreprise)}>MODIFIER</button></a> 
                                    <button className='action' onClick={() => removeEntreprise(entreprise.ent_id)}>SUPPRIMER</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Footer />
        </>
    );
};

export default TableauDeBord;
