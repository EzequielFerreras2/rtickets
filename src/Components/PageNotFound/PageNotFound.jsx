import { Grid } from '@mui/material';
import React from 'react';

const PageNotFound = () => {
    return (
        <>
        
        <br/>
            

            <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            >
            <Grid item xs={3}>
                <img src='https://static.vecteezy.com/system/resources/previews/001/812/604/non_2x/page-not-found-404-design-illustration-404-error-web-page-concept-minimal-cartoon-flat-style-vector.jpg'/>
            </Grid>   
            
            </Grid> 
        </>
    );
}

export default PageNotFound;
