import {createUserWithEmailAndPassword, GoogleAuthProvider,signInWithEmailAndPassword,signInWithPopup, updateProfile} from 'firebase/auth'
import {  doc, getDoc, setDoc } from 'firebase/firestore/lite';
import { FirebaseAuth, FirebaseDB } from './config';



const googleProvider = new GoogleAuthProvider();


export const singInWhithGoogle = async() =>{

    try
    {
        const result = await signInWithPopup(FirebaseAuth,googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult(result);
        const {displayName,email,photoURL,uid} = result.user;
        const {providerId}= result;

        const docuRef = doc(FirebaseDB,`usuarios/${uid}`);

        const getRol = await getDoc(docuRef);

        console.log(getRol)

        if( getRol._document === null)
        {
            console.log("Rol de usuario asignado")
            await setDoc(docuRef,{ photoURL: photoURL, email: email, displayName: displayName, providerId: providerId, rol:"user"})
        }
        else{

            console.log("Usuario con Rol asignado")
        }

       const userRol= getRol.data()
  
         

        return{
            ok:true,
            displayName,email,photoURL,uid,providerId,rol:userRol?.rol
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
        errorMessage,
        errorCode,
        credential
          }
    
    }

};
 export const singInWhithEmailPassword = async({email,password}) =>{

    try
    {
        const result= await signInWithEmailAndPassword(FirebaseAuth, email,password);
        const {uid,photoURL,displayName}=result.user;
        const {providerId}= result;


        const docuRef = doc(FirebaseDB,`usuarios/${uid}`);

        const getRol = await getDoc(docuRef);

        if( getRol._document === null)
        {
            console.log("vacio")
            await setDoc(docuRef,{ photoURL: photoURL, email: email, displayName: displayName, providerId: providerId, rol:"user"})
        }
        else{

            console.log("Con data")
        }

       const userRol= getRol.data()
   

    
        return{
            ok:true,
            uid,photoURL,displayName,providerId,rol: userRol?.rol
              }
    } 
    
    catch (error) 
    {
        return{
            ok:false,
            errorMessage:error.message
              }
    }
 };

export const registerUserWithPassword = async({email,password,displayName} )=>{

    try 
    {
       const resp = await createUserWithEmailAndPassword(FirebaseAuth,email,password)
       const {uid,photoURL}= resp.user
       const {providerId}= resp;

       await updateProfile(FirebaseAuth.currentUser,{ displayName})
       
       const docuRef = doc(FirebaseDB,`usuarios/${uid}`);
   
       await setDoc(docuRef,{ photoURL: photoURL, email: email, displayName: displayName, providerId: providerId, rol:'user'})

       const getRol = await getDoc(docuRef);

       const userRol= getRol.data()
 
       
       return{
        ok:true,
        uid,photoURL, email, displayName,providerId,rol:userRol?.rol
             }


        
    } catch (error) 
    {
        return{
            ok:false,
            errorMessage:error.message
              }   
    }


};


export const logoutFirebase = async()=>{

    return await FirebaseAuth.signOut();


}