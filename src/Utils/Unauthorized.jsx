import React from 'react';
import LogoInterdit from "../Assets/interdit.avif"

const Unauthorized = () => {
    return (
        <div id='unauthorized'>
            <h1>403 - Non autorisé</h1>
            <p>Vous n'avez pas la permission d'accéder à cette page.</p>
            <div>
                <img src={LogoInterdit} alt="logointerdiction" />
            </div>
        </div>
    );
}

export default Unauthorized;
