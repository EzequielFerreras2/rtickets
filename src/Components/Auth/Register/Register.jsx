import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";




function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <a color="inherit" href='https://www.linkedin.com/in/ezequiel-ferreras-a20619134'>
        {"RticketsApp"}
      </a>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {

  const schema = yup.object().shape({
    Email: yup.string().email().required(),
    FullName: yup.string().required().max(60),
    Password: yup.string().min(8).max(32).required(),
    ConfPassword: yup.string().min(8).max(32).required(),
  });

  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

 


  const onSubmit = (event) => {
   
    console.log("Event")
    console.log(event)
    console.log("Errors")
    console.log(errors.fullName?.message)
    
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >

                <TextField
                 {...register("FullName")}
                  name="FullName"
                  fullWidth
                  id="FullName"
                  label="Nombre Completo"
                  autoFocus
                  error={errors.FullName ? true : false}
                  helperText={errors.FullName?.message}
                />
              </Grid>
             
              <Grid item xs={12}>
                <TextField
                  required
                  {...register("Email")}
                  fullWidth
                  id="Email"
                  label="Correo Electronico"
                  name="Email"
                  autoComplete="Email"
                  error={errors.Email ? true : false}
                  helperText={errors.Email?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  {...register("Password")}
                  fullWidth
                  name="Password"
                  label="Contraseña"
                  type="Password"
                  id="password"
                  error={errors.Password ? true : false}
                  helperText={errors.Password?.message}
                />
                
              </Grid>
              <Grid item xs={12}>
                <TextField
                {...register("ConfPassword")}
                  required
                  fullWidth
                  name="ConfPassword"
                  label="Confirmar Contraseña"
                  type="Password"
                  id="ConfPassword"
                  error={errors.ConfPassword ? true : false}
                  helperText={errors.ConfPassword?.message}
                />
                
              </Grid>
              
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Registrar
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to='/login' variant="body2">
                  Ya tienes Cuenta? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}