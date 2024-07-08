import axios from "axios";


class EntrepriseService  {
    
    static getAllEntreprise(){
        axios.get("http://127.0.0.1:3005/entreprises");
    }
}


export default EntrepriseService ;