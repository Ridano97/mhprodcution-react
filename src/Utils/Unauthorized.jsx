import React, { useEffect, useState } from 'react';
import LogoInterdit from "../Assets/interdit.avif"
import { useNavigate } from 'react-router-dom';

const Unauthorized = () => {

    const navigate = useNavigate();
    const [counter, setCounter] = useState(5);

    useEffect(() => {
        counter > 0 
            ? setTimeout (() => {
                setCounter(counter - 1)
            }, 1000)
            :navigate("/accueil")
         
    }, [counter])


    return (
        <div id='unauthorized'>
            <h1>403 - Non autorisé</h1>
            <p>Vous n'avez pas la permission d'accéder à cette page.</p>
            <p>{counter}</p>
            <div>
                <img src={LogoInterdit} alt="logointerdiction" />
            </div>
        </div>
    );
}

export default Unauthorized;
