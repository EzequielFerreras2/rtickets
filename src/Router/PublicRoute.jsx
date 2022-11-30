import React from 'react';
import { Navigate, Route, Routes} from 'react-router-dom';
import Login from '../Components/Auth/Login/Login'
import Register from '../Components/Auth/Register/Register'
import PageNotFound from '../Components/PageNotFound/PageNotFound';
const PublicRoute = (updateNavbar) => {
    // const  status = localStorage.getItem('status');

    //    // not-authenticated //checking //authenticated
    // return (status !== 'Authenticated'   ? <Outlet/> : <Navigate to="/home"/>)   ;

    return(

        <Routes>
            <Route path="login" isPrivate={false} element={<Login setNavbar={() =>updateNavbar()}/>}/>
            <Route path="register" element={<Register/>}/>

            <Route path='/*' element={<Navigate to="/auth/login"/>}/>
            
        </Routes>
    )
}

export default PublicRoute; 
