import { createSlice } from '@reduxjs/toolkit';

export const casesSlice = createSlice({
name: 'cases',
initialState: {
 value: 0
 },
  reducers: {
exampleFuntion: (state, /* action */ ) => {
 //! https://react-redux.js.org/tutorials/quick-start
 // Redux Toolkit allows us to write mutating logic in reducers. It
// doesn't actually mutate the state because it uses the Immer library,
 // which detects changes to a draft state and produces a brand new
 // immutable state based off those changes
  state.value += 1;
   },
 }
});

// Action creators are generated for each case reducer function
export const { exampleFuntion } = casesSlice.actions;