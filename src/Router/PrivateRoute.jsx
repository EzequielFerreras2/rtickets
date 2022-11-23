import React, { useContext, useEffect } from 'react';
import { Navigate, Outlet} from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext/AuthContext';

const PrivateRoute = ({children}) => {

    const {authState} = useContext(AuthContext);

    const loggedUser = authState.logged
    
    useEffect(() => {
        console.log('Logeed')
        console.log(loggedUser)
    }, [loggedUser]);

    return (loggedUser ? <Outlet/> : <Navigate to="/login"/>)   ;
}

export default PrivateRoute;
