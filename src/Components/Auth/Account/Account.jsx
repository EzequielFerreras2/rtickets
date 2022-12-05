import { Box } from '@mui/material';
import React  from 'react';
import { useSelector } from 'react-redux';


const Account = () => {

    const user = useSelector(store => store.auth)
    console.log(user)
    
    return (
        <>
        
        <Box>
            <p>{user.displayName}</p>
            <p>{user.displayName}</p>
            <p>{user.displayName}</p>
            <p>{user.displayName}</p>
        </Box>

        </>
    );
}

export default Account;
