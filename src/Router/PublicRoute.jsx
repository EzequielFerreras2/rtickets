import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, Route, Routes} from 'react-router-dom';
import Login from '../Components/Auth/Login/Login'
import Register from '../Components/Auth/Register/Register'
import PageNotFound from '../Components/PageNotFound/PageNotFound';
const PublicRoute = (updateNavbar) => {
    
    const {status} =useSelector(store => store.auth)

       // not-authenticated //checking //authenticated
    return (status === 'checking' || status === 'not-authenticated'  ? <Outlet/> : <Navigate to="/home"/>)   ;

    // return(

    //     <Routes>
    //         <Route path="login" isPrivate={false} element={<Login setNavbar={() =>updateNavbar()}/>}/>
    //         <Route path="register" element={<Register/>}/>
    //     </Routes>
    // )
}

export default PublicRoute; 
