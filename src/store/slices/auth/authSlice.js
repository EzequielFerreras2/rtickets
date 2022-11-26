import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
name: 'auth',

initialState: {

    status:'not-authenticated', // not-authenticated //checking //authenticated
    uid: null,
    email:null,
    disPlayName: null,
    role: null,
    photoURL: null,
    errorMessage: null,


 },
  reducers: {

    login: (state, {payload}) =>{

        state.status='authenticated' // not-authenticated //checking //authenticated
        state.uid= payload.uid;
        state.email=payload.email;
        state.disPlayName= payload.disPlayName;
        state.role= payload.role;
        state.photoURL= payload.photoURL;
        state.errorMessage= null;
    

    },

    logout: (state, {payload}) =>{

    state.status='not-authenticated' // not-authenticated //checking //authenticated
    state.uid= null;
    state.email=null;
    state.disPlayName= null;
    state.role= null;
    state.photoURL= null;
    state.errorMessage= payload.errorMessage;

    },

    chekingCredentials: (state) =>{

        state.status = 'checking';
    }

 }

});

// Action creators are generated for each case reducer function
export const { login, logout, chekingCredentials } = authSlice.actions;