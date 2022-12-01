
import { registerUserWithPassword, singInWhithGoogle,singInWhithEmailPassword, logoutFirebase } from '../../../firebase/providers'
import { login, logout, chekingCredentials } from './authSlice'


export const checkingAuthentication =() =>{

    return async( dispatch ) =>{

        dispatch(chekingCredentials())
        

    }
};
export const startGoogleSingIn =() =>{

    return async( dispatch ) =>{

        dispatch(chekingCredentials());
        const results = await singInWhithGoogle();
        console.log(results)
        
        if(!results.ok)
        {
            dispatch(logout( results.errorMessage ));
        }
        else{

            dispatch(login(results))

        }

    }

};

export const startLogi =({email,password}) =>{

    return async( dispatch)=>
    {
        dispatch(chekingCredentials());

        const results =await singInWhithEmailPassword({email,password})
        console.log(results)

        if(!results.ok)
        {
            dispatch(logout( results ));
            console.log(results) 
        }
        else{

            dispatch(login(results))
        }
    }

};
export const startCreatingUserWithEmailPassword =({email,password,displayName})=>{

    return async(dispatch)=>{

      dispatch(chekingCredentials());
      const {ok,uid,photoURL,errorMessage,providerId} = await registerUserWithPassword({email,password,displayName});
        console.log(ok,uid,photoURL,errorMessage,providerId)

      if(!ok){
        dispatch(logout({errorMessage}))
      }
      else{
         dispatch(login({uid,displayName,email,photoURL,providerId}))
         
      }
        
    }
    
};

export const getUserRol= ()=>{

    return 

}

export const startLogout= () =>{

    return async(dispatch) =>{

      await logoutFirebase();
        dispatch(logout({}));
    }

};