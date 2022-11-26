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
    email: yup.string().email().required(),
    fullName: yup.string().required(),
    password1: yup.string().min(8).max(32).required(),
    password2: yup.string().min(8).max(32).required(),
  });

  const { register, handleSubmit, watch, formState: { errors },reset } = useForm({
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
                 {...register("fullName")}
                  name="fullName"
                  fullWidth
                  id="fullName"
                  label="Nombre Completo"
                  autoFocus
                  error={errors.fullName ? true : false}
                  helperText={errors.fullName?.message}
                />
              </Grid>
             
              <Grid item xs={12}>
                <TextField
                  required
                  {...register("email")}
                  fullWidth
                  id="email"
                  label="Correo electronico"
                  name="email"
                  autoComplete="email"
                  error={errors.email ? true : false}
                  helperText={errors.email?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  {...register("password1")}
                  fullWidth
                  name="password1"
                  label="Contraseña"
                  type="password1"
                  id="password1"
                  error={errors.password1 ? true : false}
                  helperText={errors.password1?.message}
                />
                
              </Grid>
              <Grid item xs={12}>
                <TextField
                {...register("password2")}
                  required
                  fullWidth
                  name="password2"
                  label="Confirmar Contraseña"
                  type="password2"
                  id="password2"
                  error={errors.password2 ? true : false}
                  helperText={errors.password2?.message}
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