import React from 'react';
import {Route,Routes} from "react-router-dom";
import Login from "../Components/Auth/Login/Login"
import Home from '../Components/DashBoard/Home';
import AdminDashBoard  from '../Components/DashBoard/AdminDashBoard/AdminDashboard'
import UserDashBoard from '../Components/DashBoard/UserDashBoard/UserDashBoard'
const AppRouter = () => {
    return (
       <>
<Routes>
 
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>

        <Route path="/admindashboard" element={<AdminDashBoard />}/>
        <Route path="/userdashboard" element={<UserDashBoard />}/>

        <Route path="/login" element={<Login />}/>
        

</Routes>
       </>
    );
}

export default AppRouter;
