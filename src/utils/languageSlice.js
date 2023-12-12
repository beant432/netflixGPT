import { createSlice } from "@reduxjs/toolkit";

const languageSlice=createSlice({
    name:'language',
    initialState:{lang:'en'},
    reducers:{
        handlelanguage:(state,action)=>{
            state.lang=action.payload
        }
    }
})
export const {handlelanguage}=languageSlice.actions;
export default languageSlice.reducer;