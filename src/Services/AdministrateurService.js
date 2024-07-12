import axios from "axios";
import instance from "../API/Axios";

    const token = localStorage.getItem("token")

    const getAllAdministrateur = () => {
        axios.get("/administrateurs");
    }

    const getAdministrateurByID = (id) => {
        return instance(token).get("/administrateurs/" + id);
    }



export default {getAllAdministrateur, getAdministrateurByID} ;