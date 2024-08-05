import axios from "axios";
import instance from "../API/Axios";

const token = localStorage.getItem("token");

const getAllEntreprise = () => {
    return instance(token).get("/entreprises");
};

const getEntrepriseByID = (id) => {
    return instance(token).get("/entreprises/" + id);
};

const addEntreprise = (data) => {
    return instance(token).post("/entreprises", data);
};

const removeEntreprise = (id) => {
    return instance(token).delete("/entreprises/" + id);
};

const updateEntreprise = (id, data) => {
    return instance(token).patch("/entreprises/" + id, data);
};

export default { getAllEntreprise, getEntrepriseByID, addEntreprise, removeEntreprise, updateEntreprise };
