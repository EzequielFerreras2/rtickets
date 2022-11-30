import React from 'react';
import { Navigate, Route, Routes} from 'react-router-dom';
import Account from '../Components/Auth/Account/Account';
import AdminDashboard from '../Components/DashBoard/AdminDashBoard/AdminDashboard';
import Home from '../Components/DashBoard/Home';
import UserDashBoard from '../Components/DashBoard/UserDashBoard/UserDashBoard';
import PageNotFound from '../Components/PageNotFound/PageNotFound';


const PrivateRoute = (updateNavbar) => {

    // const  status = localStorage.getItem('status');

    // return (status === 'authenticated' ? <Outlet/> : <Navigate to="/login"/>)   ;

    return(

        <Routes>
            
            <Route path="/home" element={<Home setNavbar={() =>updateNavbar()}/>}/>
            <Route path="/admindashboard" element={<AdminDashboard />}/>
            <Route path="/userdashboard" element={<UserDashBoard />}/>
            <Route path="/account" element={<Account/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/*" element={<Navigate to="/"/>}/>
            {/* <Route path='*' element={<PageNotFound/>}/> */}
            
        </Routes>
    )
}

export default PrivateRoute;
