import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet} from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext/AuthContext';

const PrivateRoute = ({children}) => {

    const  {status} = useSelector((state) => state.auth);

    const [loggedRedux, setLoggedRedux] = useState(false)

    const {authState} = useContext(AuthContext);

    const loggedUser = authState.logged

    

      


  
    

    

    return (loggedUser ? <Outlet/> : <Navigate to="/login"/>)   ;
}

export default PrivateRoute;
