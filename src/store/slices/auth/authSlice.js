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

    login: (state, action) =>{

    },

    logout: (state, payload) =>{

    },

    chekingCredentials: (state) =>{

        state.status = 'checking';
    }

 }

});

// Action creators are generated for each case reducer function
export const { login, logout, chekingCredentials } = authSlice.actions;