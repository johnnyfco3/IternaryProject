import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export function ProtectedRoutes() {
        return localStorage.getItem("user") ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoutes;