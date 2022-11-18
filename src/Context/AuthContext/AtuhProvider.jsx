import { ConstructionOutlined } from '@mui/icons-material';
import React, { useReducer } from 'react';
import { types } from '../Types/types';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';


const init =() =>{
    const user =JSON.parse(localStorage.getItem('user')) ;

    return{
        logged: !!user,
        user
    }
}

const AtuhProvider = ({children}) => {

const[ authState,dispatch ]= useReducer(authReducer,{}, init);

const login =(data)=>{
    const user ={

        id:'abc',
        role: data.role,
        name: data.email,
        password:data.password

    }

    const action={
        type: types.login,
        payload:{
          user
        }
    }

    localStorage.setItem('user', JSON.stringify(user));

    dispatch(action);

}
    return (
        <AuthContext.Provider value={{authState,login:login}}>
            {children}
        </AuthContext.Provider>
        
    );
}

export default AtuhProvider;
