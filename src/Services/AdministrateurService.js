import axios from "axios";


class AdministrateurService {

    static getAllAdministrateur(){
        axios.get("http://127.0.0.1:3005/administrateurs");
    }
}



export default AdministrateurService ;