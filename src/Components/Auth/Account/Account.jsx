import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
const user= JSON.parse(localStorage.getItem('user'));

const Account = () => {

    const user = useSelector(store => store.auth)
    console.log(user)
    
    return (
        <>
        <p>{user.displayName}</p>
        <p>{user.displayName}</p>
        <p>{user.displayName}</p>
        <p>{user.displayName}</p>

        </>
    );
}

export default Account;
