import { singInWhithGoogle } from '../../../firebase/providers'
import { login, logout, chekingCredentials } from './authSlice'


export const checkingAuthentication =(email,password) =>{

    return async( dispatch ) =>{

        dispatch(chekingCredentials())
        console.log(email,password)

    }
}
export const startGoogleSingIn =() =>{

    return async( dispatch ) =>{

        dispatch(chekingCredentials());
        const results = await singInWhithGoogle();
        
        if(!results.ok)
        {
            dispatch(logout( results.errorMessage ));
        }
        else{

            dispatch(login(results))
        }

    }
}