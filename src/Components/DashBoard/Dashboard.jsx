import React from 'react';
import { useSelector } from 'react-redux';
import AdminDashboard from './AdminDashBoard/AdminDashboard';
import UserDashBoard from './UserDashBoard/UserDashBoard';



const Dashboard = () => {
    const {rol }=useSelector(store => store.auth)
    return (
        <>
            {
                rol ==='admin'?
                <AdminDashboard/>
                :<UserDashBoard/>
            }

        </>
    );
}

export default Dashboard;
