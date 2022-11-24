import React, { useContext, useEffect } from 'react';
import { Navigate, Outlet} from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext/AuthContext';

const PublicRoute = ({children}) => {

    const {authState} = useContext(AuthContext);

    const loggedUser = authState.logged

    return (!loggedUser ? <Outlet/> : <Navigate to="/home"/>)   ;
}

export default PublicRoute;
