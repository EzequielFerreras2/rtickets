
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
        
        if(!results.ok)
        {
            dispatch(logout( results.errorMessage ));

            localStorage.removeItem('user')
        }
        else{

            console.log('startlogigoogle')
            localStorage.setItem('user', JSON.stringify(results));

            dispatch(login(results))
            
        

        }

    }

};

export const startLogi =({email,password}) =>{

    return async( dispatch)=>
    {
        dispatch(chekingCredentials());

        const results =await singInWhithEmailPassword({email,password})
        

        if(!results.ok)
        {
            localStorage.removeItem('user')
            dispatch(logout( results ));
             
        }
        else{

            console.log('startlogi')
            localStorage.setItem('user', JSON.stringify(results));
            dispatch(login(results))
        
        }
    }

};
export const startCreatingUserWithEmailPassword =({email,password,displayName})=>{

    return async(dispatch)=>{

      dispatch(chekingCredentials());
      const {ok,uid,photoURL,errorMessage,providerId,rol} = await registerUserWithPassword({email,password,displayName});
        

      if(!ok){
        localStorage.removeItem('user')
        dispatch(logout({errorMessage}))
      }
      else{
        console.log('startcreatin')
        localStorage.setItem('user', JSON.stringify({uid,displayName,email,photoURL,providerId,rol}));
         dispatch(login({uid,displayName,email,photoURL,providerId,rol}))
        
      }
        
    }
    
};



export const startLogout= () =>{

    return async(dispatch) =>{

      await logoutFirebase();
      localStorage.removeItem('user')
        dispatch(logout({}));
    }

};