import axios from "axios";



const instance = (token) => { return axios.create({
    baseURL: "http://localhost:3005",
    headers: {
        Authorization : `Bearer ${token && token}` /* si token existe alors tu m'affiches token*/
        }
})}


export default instance ;