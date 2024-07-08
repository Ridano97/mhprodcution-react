import React from 'react'
import NavBar from '../Components/NavBar';

const AccueilPage = () => {


    let token = localStorage.getItem("token");
    console.log(token);

    return <>
        <NavBar/>
    </>
}


export default AccueilPage ; 
