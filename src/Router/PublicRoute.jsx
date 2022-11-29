import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, Route, Routes} from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext/AuthContext';
import Login from '../Components/Auth/Login/Login'
import Register from '../Components/Auth/Register/Register'
const PublicRoute = (updateNavbar) => {
    // const  status = localStorage.getItem('status');

    //    // not-authenticated //checking //authenticated
    // return (status !== 'Authenticated'   ? <Outlet/> : <Navigate to="/home"/>)   ;

    return(

        <Routes>
            <Route path="/login" isPrivate={false} element={<Login setNavbar={() =>updateNavbar()}/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
    )
}

export default PublicRoute; 
