import { async } from '@firebase/util';
import { current } from '@reduxjs/toolkit';
import {createUserWithEmailAndPassword, GoogleAuthProvider,signInWithPopup, updateProfile} from 'firebase/auth'
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

export const singInWhithGoogle = async() =>{

    try
    {
        const result = await signInWithPopup(FirebaseAuth,googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult(result);
        const {displayName,email,photoURL,uid} = result.user;
       
        return{
            ok:true,
            displayName,email,photoURL,uid
        }
    }
    catch(error)
    {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);

    return{

        ok:false,
        errorMessage
    }
    
    }

}

export const registerUserWithPassword = async({email,password,displayName} )=>{
    try {

       const resp = await createUserWithEmailAndPassword(FirebaseAuth,email,password)
       const {uid,photoURL}= resp.user
       await updateProfile(FirebaseAuth.currentUser,{ displayName})


       return{
        ok:true,
        uid,photoURL, email, displayName
       }


        
    } catch (error) {

        return{

            ok:false,
            errorMessage:error.message
        }
        
    }


}