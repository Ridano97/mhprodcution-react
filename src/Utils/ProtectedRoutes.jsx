import { jwtDecode } from 'jwt-decode';
import {Outlet, Navigate} from 'react-router-dom'


const ProtectedRoutes = () => {
    const token = localStorage.getItem("token");
    const login = true 
    return login ? <Outlet/> : <Navigate to={"/connexion-admin"}/>
}


export default ProtectedRoutes ; 