import { login, logout, chekingCredentials } from './authSlice'


export const checkingAuthentication =(email,password) =>{

    return async( dispatch ) =>{

        dispatch(chekingCredentials())
        console.log(email,password)

    }
}
export const startGoogleSingIn =(email,password) =>{

    return async( dispatch ) =>{

        dispatch(chekingCredentials());

    }
}