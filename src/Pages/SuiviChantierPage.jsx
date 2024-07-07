import React, { useState } from 'react'
import '../Styles/SuiviChantier.css'
import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import instance from "../API/Axios.jsx"

const SuiviChantierPage = () => {

    const [email, setEmail] = useState("");
    const [mdp, setMdp] = useState("");
    const navigate = useNavigate();

    const login = () => {
        instance.post("auth/login" , {
            email : email,
            motdepasse : mdp
        })
        .then(function (response) {
            console.log(response.data.token);
            toast.success(response.data.message);
            localStorage.setItem("token", response.data.token);
            navigate("/tableaudebord-administrateur");
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    
    return <>
        <NavBar/>
        <main>
            <div id='formulaire-chantier'>
                <label className='identification-entreprise' htmlFor="">Entreprise</label>
                <input className='connexion' defaultValue={email} onChange={(e) => {setEmail(e.target.value)}} required type="text" placeholder="Nom de l'entreprise"/>
                <label className='identification-entreprise' htmlFor="">Mot de passe</label>
                <input className='connexion' defaultValue={mdp} onChange={(e) => {setMdp(e.target.value)}} required type="password" name="" id="" placeholder='Mot de passe' />
                <input className='button' onClick={() => {login()}} type="button" value="Accès" />
            </div>
        </main>
        <Footer/>
    </>
}


export default SuiviChantierPage ; 