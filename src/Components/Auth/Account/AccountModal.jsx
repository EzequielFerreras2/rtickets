import { Accordion, AccordionDetails, AccordionSummary, Avatar, Button, ButtonGroup, Grid, TextField, Typography } from '@mui/material';
import { Box} from '@mui/system';
import React from 'react';
import { useSelector } from 'react-redux';
import BasicModal from '../../Common/Modal/BasicModal';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const AccountModal = ({open =false, onClose}) => {

    const {photoURL, email, displayName,providerId} = useSelector(store => store.auth)

    const name= displayName?.charAt(0);

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

        <Grid container justifyContent="center" spacing={2} alignItems="center">
                <Box sx={modalStyles.inputFields}>
                    <Grid container justifyContent="center" item xs={12}>
                        
                            {
                                photoURL
                                ? 
                                <Avatar alt="Remy Sharp" src={photoURL} sx={{ width: 100, height: 100 }}/>
                                :
                                <Avatar sx={{ width: 100, height: 100, fontSize: 44 }}>{name}</Avatar>
                            } 
                        
                    </Grid>
                    <br/>
                    
                    <Grid container justifyContent="center"  alignItems="center" item xs={12}>
                            <Typography variant="h4">{displayName}</Typography>
                    </Grid>
                    <Grid container justifyContent="center"  alignItems="center" item xs={12}>
                         <Typography>{email}</Typography>
                    </Grid>
                    {
                        providerId
                        ? 
                        null:
                        <Grid container justifyContent="center"  alignItems="center" item xs={12} >
                        <Accordion  >
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    
                                    >
                                    <Typography>Cambiar Contraseña</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Box>
                                            <TextField id="oldPasword" label="Contraseña antigua" variant="outlined" />
                                            <br/>
                                            <TextField id="newPassword" type="password" label="Nueva Contraseña" variant="outlined" />
                                            <br/>
                                            <TextField id="confPassword" type="password" label="Confirmar Contraseña" variant="outlined" />
                                            <br/>
                                           
                                            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                                                <Button variant="contained" color="success">
                                                    Confirmar
                                                </Button>
                                                <Button variant="contained" color="error">
                                                    Cancelar
                                                </Button>
                                            </ButtonGroup>
                                        </Box>
                                    </AccordionDetails>
                        </Accordion>
                            
                    </Grid>

                    }
                    
                </Box>
        </Grid>
    );



    return (
    
       <BasicModal
       open={open}
       onClose={onClose}
       content={getContent()}
       
       />
       
    );
}

export default AccountModal;
