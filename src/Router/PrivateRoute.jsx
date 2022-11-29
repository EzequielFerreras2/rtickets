import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, Route, Routes} from 'react-router-dom';
import AdminDashboard from '../Components/DashBoard/AdminDashBoard/AdminDashboard';
import Home from '../Components/DashBoard/Home';
import UserDashBoard from '../Components/DashBoard/UserDashBoard/UserDashBoard';
import { AuthContext } from '../Context/AuthContext/AuthContext';

const PrivateRoute = (updateNavbar) => {

    // const  status = localStorage.getItem('status');

    // return (status === 'authenticated' ? <Outlet/> : <Navigate to="/login"/>)   ;

    return(

        <Routes>
            
            <Route path="/home" element={<Home setNavbar={() =>updateNavbar()}/>}/>
            <Route path="/admindashboard" element={<AdminDashboard />}/>
            <Route path="/userdashboard" element={<UserDashBoard />}/>

        </Routes>
    )
}

export default PrivateRoute;
