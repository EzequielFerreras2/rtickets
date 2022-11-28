import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet} from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext/AuthContext';

const PublicRoute = ({children}) => {
    const  {status} = useSelector((state) => state.auth);

    const [loggedRedux, setLoggedRedux] = useState(true)

    const {authState} = useContext(AuthContext);

    const loggedUser = authState.logged

    

       
  

    return (!loggedUser ? <Outlet/> : <Navigate to="/home"/>)   ;
}

export default PublicRoute;
