import {Outlet, Navigate} from 'react-router-dom'


const ProtectedRoutes = () => {
    const login = true 
    return login ? <Outlet/> : <Navigate to={"/connexion-admin"}/>
}


export default ProtectedRoutes ; 