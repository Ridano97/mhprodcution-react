import axios from "axios";
import instance from "../API/Axios";

    const token = localStorage.getItem("token")

    const getAllEntreprise = () => {
        return instance(token).get("/entreprises");
    }

    const getEntrepriseByID = (id) => {
        return instance(token).get("/entreprises/" + id);
    }

    const addEntreprise = () => {
        return instance(token).post("/entreprises")
    }


export default {getAllEntreprise, getEntrepriseByID, addEntreprise} ;