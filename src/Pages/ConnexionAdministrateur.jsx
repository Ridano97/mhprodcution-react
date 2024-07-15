import React, { useState } from 'react'
import LogoMHP from '../Assets/logoblanc.png'
import '../Styles/ConnexionAdministrateur.css'
import Footer from '../Components/Footer.jsx'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import instance from "../API/Axios.jsx"

const ConnexionAdministrateur = () => {

    const [email, setEmail] = useState("");
    const [mdp, setMdp] = useState("");
    const navigate = useNavigate();

    const login = () => {
        instance().post("/auth/login" , {
            email : email,
            mdp : mdp
        })
        .then(function (response) {
            console.log(response.data.token);
            toast.success(response.data.message);
            localStorage.setItem("token", response.data.token);
            navigate("/tableaudebord-administrateur");
        })
        .catch(function (error) {
            toast.error(error.response.data.error)
        });
    }    

    return <> 
        <div id='main-arriere-plan'>
            <div id='logo-administrateur'>
                <img src={LogoMHP} alt="logomhp" width={350} height={350} />
            </div>
            <div id='formulaire-connexion-admin'>
                <h2 id='sous-titre-admin'>ACCÈS ADMINISTRATEUR</h2>
                <label htmlFor="">Administrateur</label>
                <input required defaultValue={email} onChange={(e) => {setEmail(e.target.value)}} type="text" />
                <label htmlFor="">Mot de passe </label>
                <input required defaultValue={mdp} onChange={(e) => {setMdp(e.target.value)}} type="password" name="" id="" />
                <input className="button"  onClick={() => {login()}} type="button" value="Connexion" />
            </div>
        </div>    
        <Footer/>
    </>


}

export default ConnexionAdministrateur ;