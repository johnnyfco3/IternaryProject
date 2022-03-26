import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import session from './session';

export function ProtectedRoutes() {
        return session.userID ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoutes;