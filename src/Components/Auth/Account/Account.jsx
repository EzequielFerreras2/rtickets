import React, { useEffect } from 'react';
const user= JSON.parse(localStorage.getItem('user'));

const Account = () => {


    useEffect(() => {
        console.log('User: ')
        console.log(user)
      }, [user]);
        
    return (
        <>
        
        </>
    );
}

export default Account;
