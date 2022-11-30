import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import BasicModal from '../../Common/Modal/BasicModal';

const AccountModal = ({open =false, onClose}) => {

    const modalStyles = {
        inputFields: {
            display: 'flex',
            flexDirection: 'column',
            marginTop: '1px',
            marginBottom: '15px',
            '.MuiFormControl-root': {
                marginBottom: '20px',
            },
        },
    };



    const getContent =()=>(

        <Grid container spacing={2}>
       
                <Box sx={modalStyles.inputFields}>
                    
                    <h1>aa</h1>

                </Box>
           
        </Grid>
    );



    return (
    
       <BasicModal
       open={open}
       onClose={onClose}
       title="Cuenta"
       subTitle=""
       content={getContent()}
       
       />
       
    );
}

export default AccountModal;
