import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const ProtectedRoutes = () => {
    const token = localStorage.getItem("token");

    if (!token) {
        return <Navigate to="/connexion-admin" />;
    }

    try {
        const decodedToken = jwtDecode(token);
        if (decodedToken.role === 'admin') {
            return <Outlet />;
        } else {
            return <Navigate to="/unauthorized" />;
        }
    } catch (error) {
        console.error("Token is invalid:", error);
        return <Navigate to="/connexion-admin" />;
    }
};

export default ProtectedRoutes; 
