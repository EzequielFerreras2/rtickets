import React  from 'react';
import { useSelector } from 'react-redux';


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
