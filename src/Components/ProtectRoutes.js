import React from 'react';
import {Navigate,Outlet} from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectRoutes = () => {
    // const navigate = useNavigate();
    const isAuth = useSelector(state=>state.isAuthenticated);
    // console.log(isAuth);
    return isAuth ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectRoutes;