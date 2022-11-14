import React, { useReducer } from 'react';
import { types } from '../Types/types';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';

const initialState ={
    logged:false,
}

const AtuhProvider = ({children}) => {

const[ authState,dispatch ]= useReducer(authReducer,initialState);

const login =(data)=>{

    const action={
        type: types.login,
        payload:{
            id:'abc',
            role: data.role,
            name: data.email,
            password:data.password

        }
    }

    dispatch(action);

}
    return (
        <AuthContext.Provider value={{authState,login:login}}>
            {children}
        </AuthContext.Provider>
        
    );
}

export default AtuhProvider;
