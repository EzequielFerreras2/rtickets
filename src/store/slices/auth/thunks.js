import { async } from '@firebase/util'
import { registerUserWithPassword, singInWhithGoogle,singInWhithEmailPassword } from '../../../firebase/providers'
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

export const startLogi =({email,password}) =>{

    return async( dispatch)=>
    {
        dispatch(chekingCredentials());

        const results =await singInWhithEmailPassword({email,password})


        if(!results.ok)
        {
            dispatch(logout( results ));
            console.log(results) 
        }
        else{

            dispatch(login(results))
        }
    }

}
export const startCreatingUserWithEmailPassword =({email,password,displayName})=>{

    return async(dispatch)=>{

      dispatch(chekingCredentials());
      const {ok,uid,photoURL,errorMessage} = await registerUserWithPassword({email,password,displayName});


      if(!ok){
        dispatch(logout({errorMessage}))
      }
      else{
         dispatch(login({uid,displayName,email,photoURL}))
      }
        
    }
    
}